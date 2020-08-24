import React, { useState } from "react";
import {useHistory} from 'react-router-dom'
import firebase from '../firebase'

export default () => {

    // initialize state for user, email, password, error
    const [user, setUser] = useState({});
    const [email, setEmail] = useState();

    const history = useHistory();

    const handleSubmit = event => {
        event.preventDefault();

        console.log(email);

        // FIREBASE SignIn by Email Link Settings
        const actionCodeSettings = {
            url: 'http://localhost:3000/',
            handleCodeInApp: true,
            iOS: {},
            android: {}
            // dynamicLinkDomain: 'http://localhost'
        }

        // SEND email for authentication
        firebase.auth().sendSignInLinkToEmail(email, actionCodeSettings)
            .then(() => {
                window.localStorage.setItem('emailForSignIn', email);
            })
            .catch(err => console.log(err));

        // Confirm the link is a sign-in with email link.
        if (firebase.auth().isSignInWithEmailLink(window.location.href)) {
            // var email = window.localStorage.getItem('emailForSignIn');
            if (!email) {
                email = window.prompt('Please provide your email for confirmation');
            }

            // The client SDK parses the code from the link.
            firebase.auth().signInWithEmailLink(email, window.location.href)
                .then(function (result) {
                    console.log(result)

                    // Clear email from storage.
                    window.localStorage.removeItem('emailForSignIn');
                    // Set window.localStorage for return users...
                    window.localStorage.setItem('user', email);
                    // Get/Create USER
                    if (result.additionalUserInfo.isNewUser) {
                        console.log(`Set new user ${result.user.email}`)
                        fetch(`http://localhost:3400/api/user`, {
                            method: 'POST',
                            body: email
                        })
                        .then(dbUser => setUser(dbUser))
                        .catch(error => console.log(error));
                        console.log(user)
                    } else {
                        console.log(`Get user ${result.user.email}`)
                        fetch(`http://localhost:3400/api/user/${email}`)
                        .then(dbUser => setUser(dbUser))
                        .catch(error => console.log(error));
                        console.log(user);
                    }
                    // You can access the new user via result.user
                    // Additional user info profile not available via:
                    // result.additionalUserInfo.profile == null
                    // You can check if the user is new or existing:
                    // result.additionalUserInfo.isNewUser
                })
                .catch(err => {
                    console.log(err);
                    window.window.localStorage.removeItem('emailForSignIn');
                });
        }
    }

    return (
        <div className='form'>
            <form className="form-group form-add" onSubmit={handleSubmit}>
                <label className="form-label">Enter Email<br />
                    <input id="emailLink"
                        type="text"
                        name="emailLink"
                        onChange={e => setEmail( e.target.value )}
                        placeholder="Enter email" />
                </label>
                <br />
                <button className='btn-small' type='submit'>Send Link</button>
            </form>
        </div>
    )

};