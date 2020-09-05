import React, { useState, useEffect } from "react";
import { useHistory } from 'react-router-dom';
import firebase from '../../utils/firebase';
import axios from 'axios';

export default () => {
  // const [user, setUser] = useState({});
  const [email, setEmail] = useState();

  const history = useHistory();
  let emailForSignIn;

  useEffect(() => {
    if (!email && emailForSignIn) {
      setEmail(emailForSignIn);
    }
    console.log(email);
  }, [emailForSignIn, email])

  const handleSubmit = event => {
    event.preventDefault();
    console.log(email);
    // FIREBASE SignIn by Email Link Settings
    const actionCodeSettings = {
      url: 'https://jam.chindowns.app/user',
      handleCodeInApp: true,
      iOS: {},
      android: {}
    }
    // If previous user is the current user, already logged in.
    // Need to add the logic
    if (email === window.localStorage.getItem('userEmail')) {
      history.replace('/view');
    } else {

      // SEND email for authentication
      firebase.auth().sendSignInLinkToEmail(email, actionCodeSettings)
        .then(() => {
          window.localStorage.setItem('emailForSignIn', email);
          // make a message notifying user to check their email
          console.log(`Sending signin link to ${email}`)
        })
        .catch(err => console.log(err));
    }
  }


  // Confirm the link is a sign-in with email link.
  if (firebase.auth().isSignInWithEmailLink(window.location.href)) {
    console.log("Signing in FROM email link...\nGetting emailForSignIn")
    emailForSignIn = window.localStorage.getItem('emailForSignIn')

    // if (!emailForSignIn) {
    //   email = window.prompt('Please provide your email for confirmation');
    // }

    // The client SDK parses the code from the link.
    firebase.auth().signInWithEmailLink(emailForSignIn, window.location.href)
      .then(result => {
        console.log("=== Firebase Returned Result ===")
        console.log(result)
        // if (result.user.email === email)

        // Get / Create USER
        if (result.additionalUserInfo.isNewUser && result.user.email === email) {
          // New User
          console.log(`Set new user ${result.user.email}`)
          axios.post('/api/user/', {
            email: email
          })
            .then(res => {
              console.log(`Signed In New User: ${res.data.id} ${res.data.email}`)
              // setUser(res.data);
              window.localStorage.setItem('userID', res.data.id);
              window.localStorage.setItem('userEmail', res.data.email);
              // Clear email from storage.
              window.localStorage.removeItem('emailForSignIn');

              history.replace('/add');
            })
            .catch(error => console.log(error));

        } else if (result.user.email === email) {

          // Existing User
          console.log(`Get user ${result.user.email}`)
          axios(`/api/user/${email}`)
            .then(res => {
              console.log(res.data);
              console.log(`Signed In User: ${res.data.id} ${res.data.email}`);
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
    <div className='form'>
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
    </div>
  )

};