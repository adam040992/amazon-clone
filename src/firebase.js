import firebase from 'firebase';

const firebaseConfig = firebase.initializeApp ({
    apiKey: "AIzaSyAlCleiROVP8oXZTwW_yea7K1rLWX8FkzM",
    authDomain: "clone-61896.firebaseapp.com",
    projectId: "clone-61896",
    storageBucket: "clone-61896.appspot.com",
    messagingSenderId: "822766775539",
    appId: "1:822766775539:web:d7b432d58e2e36a8c41b86"
  });

  const db = firebase.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { db, auth, provider };