import React, { useState, useEffect } from "react";
import { useHistory } from 'react-router-dom';
import firebase from '../../utils/firebase';
import axios from 'axios';
import './index.css';

export default () => {
  // const [user, setUser] = useState({});
  const [email, setEmail] = useState(null);
  const [checkEmail, setCheckEmail] = useState(false)

  let history = useHistory();
  let currentUser;
  let emailForSignIn;

  if ("localStorage" in window) {

    currentUser = localStorage.getItem('userEmail');
    emailForSignIn = localStorage.getItem('emailForSignIn');
    // console.log(emailForSignIn)
    // console.log(email)
  }

  useEffect(() => {
    if (!email && emailForSignIn) {
      setEmail(emailForSignIn);
      console.log(email);
    }
  }, [email, emailForSignIn])

  console.log(window.location.href)

  const handleSubmit = event => {
    event.preventDefault();
    console.log(email);
    // FIREBASE SignIn by Email Link Settings

    let url = null;

    if (process.env.NODE_ENV === "production") {
      url = 'https://jam.chindowns.app/user';
    } else {
      url = 'http://localhost:3000/user';
    }

    const actionCodeSettings = {
      url: url,
      handleCodeInApp: true,
      iOS: {},
      android: {}
    }
    // If previous user is the current user, already logged in.
    // Need to add the logic
    if (email === currentUser) {
      // console.log('Current User is Signed In')
      history.replace('/view');
    } else {

      // SEND email for authentication
      firebase.auth().sendSignInLinkToEmail(email, actionCodeSettings)
        .then(() => {
          window.localStorage.setItem('emailForSignIn', email);
          setCheckEmail(true);
          // make a message notifying user to check their email
          // console.log(`Sending signin link to ${email}`)
        })
        .catch(err => console.log(err));
    }
  }


  // Confirm the link is a sign-in with email link.
  if (firebase.auth().isSignInWithEmailLink(window.location.href)) {
    // console.log("Signing in FROM email link...\nGetting emailForSignIn")

    // The client SDK parses the code from the link.
    firebase.auth().signInWithEmailLink(emailForSignIn, window.location.href)
      .then(result => {
        // console.log("=== Firebase Returned Result ===")
        // console.log(result)
        // console.log(email)

        // Get / Create USER
        // if (result.additionalUserInfo.isNewUser && result.user.email === email) {
        if (result.additionalUserInfo.isNewUser) {
          // New User
          // console.log(`Set new user ${result.user.email}`)
          axios.post('/api/user/', {
            email: result.user.email
          })
            .then(res => {
              // console.log(`Signed In New User: ${res.data.id} ${res.data.email}`)
              // setUser(res.data);
              window.localStorage.setItem('userID', res.data.id);
              window.localStorage.setItem('userEmail', res.data.email);
              // Clear email from storage.
              window.localStorage.removeItem('emailForSignIn');

              history.replace('/add');
            })
            .catch(error => console.log(error));

          // } else if (result.user.email === email) {
        } else {
          // Existing User
          console.log(`Get user ${result.user.email}`)
          axios(`/api/user/${result.user.email}`)
            .then(res => {
              // console.log(res.data);
              // console.log(`Signed In User: ${res.data.id} ${res.data.email}`);
              // setUser(res.data);
              window.localStorage.setItem('userID', res.data.id);
              window.localStorage.setItem('userEmail', res.data.email);
              // Clear email from storage.
              window.localStorage.removeItem('emailForSignIn');

              history.replace('/view');
            })
            .catch(error => console.log(error));
        }
        // You can access the new user via result.user
        // Additional user info profile not available via:
        // result.additionalUserInfo.profile == null
        // You can check if the user is new or existing:
        // result.additionalUserInfo.isNewUser
      })
      .catch(err => {
        console.log(err);
      });
  }

  return (
    !checkEmail ?
      (<div className='form'>
        <form className="form-group form-add" onSubmit={handleSubmit}>
          <label className="form-label">Enter Email<br />
            <input id="emailLink"
              type="text"
              name="emailLink"
              onChange={e => setEmail(e.target.value)}
              placeholder="Enter email" />
          </label>
          <br />
          <button className='btn-small' type='submit'>Send Link</button>
        </form>
      </div>)
      :
      (<div id="checkEmailMessage" className="radius background-dark-grey">
        <div className="text-shadow white large">
          Check Your Email.  The sign-in link will open a new window.
        </div>
      </div>)

  )

}