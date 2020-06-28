import * as firebase from 'firebase';

export const firebaseConfig = {
    apiKey: "AIzaSyCtfyyT8OLVX90MyexpZAf6pr_vRCe___s",
    authDomain: "ol-software.firebaseapp.com",
    databaseURL: "https://ol-software.firebaseio.com",
    projectId: "ol-software",
    storageBucket: "ol-software.appspot.com",
    messagingSenderId: "195970068162",
    appId: "1:195970068162:web:a832270121cb3f1538155b"
};

// Initialize Firebase
const DB = firebase.initializeApp(firebaseConfig);

export default DB.database().ref();