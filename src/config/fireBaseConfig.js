// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyADAnpO7TwJlozoetYR8dWqcwafODCprns",
    authDomain: "redux-firebase-68e40.firebaseapp.com",
    projectId: "redux-firebase-68e40",
    storageBucket: "redux-firebase-68e40.appspot.com",
    messagingSenderId: "523199665247",
    appId: "1:523199665247:web:cf9672afcf3983225537ea",
    measurementId: "G-N6MW343YRX"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.firestore().settings({ timestampsInSnapshots: true })

export default firebase;