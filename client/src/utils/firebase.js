import * as firebase from 'firebase/app';
import config from './config.json'
// import 'firebase/analytics';
import 'firebase/auth';

firebase.initializeApp(config);
export const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export const signInWithGoogle = () => {
    auth.signInWithPopup(provider);
};

// export const analytics = firebase.analytics();

export default firebase;