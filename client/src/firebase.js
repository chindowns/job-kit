import React from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyChTyTbYySItXrH4DOjkmLAAkG7s_ChP1s",
    authDomain: "job-manager-dc3f0.firebaseapp.com",
    databaseURL: "https://job-manager-dc3f0.firebaseio.com",
    projectId: "job-manager-dc3f0",
    storageBucket: "job-manager-dc3f0.appspot.com",
    messagingSenderId: "1039852111779",
    appId: "1:1039852111779:web:03d1411527f2f9799f7c16",
    measurementId: "G-2ZSY59G81R"
  };

firebase.initializeApp(firebaseConfig);

const userRef = firestore.doc('users/${user.uid}');
const snapshot = await userRef.get();

export const generateUser = async (user, additionalData) => {
  if (!user) return;
  const userRef = firestore.doc('users/${user.uid}');
  const snapshot = await userRef.get();
  if(!snapshot.exists){
    const {email, displayName} = user;
    try {
      await userRef.set({
        displayName,
        email,
        ...additionalData
      });
    } catch (error) {
      console.error("Error creating user document", error);
    }
  }
  return generateUser(user.uid);
};

const getUser = async uid => {
  if (!uid) return null;
  try {
    const userDocument = await firestore.doc(`users/${uid}`).get();
    return {
      uid,
      ...userDocument.data()
    };
  } catch (error) {
    console.error("Error fetching user", error);
  }
}

const provider = new firebase.auth.GoogleAuthProvider();
export const signInWithGoogle = () => {
  auth.signInWithPopup(provider);
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();