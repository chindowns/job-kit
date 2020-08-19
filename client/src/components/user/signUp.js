import React from 'react';
import { useHistory } from 'react-router-dom';
import '../firebase/initFirebase'
import * as firebase from 'firebase';
import * as firebaseui from 'firebaseui'


export default () => {

    // define history
    const history = useHistory();
    
    // Initialize the FirebaseUI Widget using Firebase.
    let ui = new firebaseui.auth.AuthUI(firebase.auth());

    let uiConfig = {
        callbacks: {
            signInSuccessWithAuthResult: function (authResult, redirectUrl) {
                // User successfully signed in.
                // Return type determines whether we continue the redirect automatically
                // or whether we leave that to developer to handle.
                return true;
            },
            uiShown: function () {
                // The widget is rendered.
                // Hide the loader.
                document.getElementById('loader').style.display = 'none';
            }
        },
        // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
        signInFlow: 'popup',
        signInSuccessUrl: history.push('/view'),
        signInOptions: [
            // Leave the lines as is for the providers you want to offer your users.
            firebase.auth.GoogleAuthProvider.PROVIDER_ID,
            {
                provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
                signInMethod: firebase.auth.EmailAuthProvider.EMAIL_LINK_SIGN_IN_METHOD,
                requireDisplayName: false,
                // Allow cross device sign-in
                forceSameDevice: false,
            }
        ],
        // Terms of service url.
        tosUrl: "",
        // Privacy policy url.
        privacyPolicyUrl: ""
    };

    ui.start('#firebaseui-auth-container', uiConfig);
    
    return (
        <>
        // Define where FirebaseUI sign-in widget renders

        </>
    )
    

}

