import firebase, { firestore } from 'firebase/app'
import 'firebase/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyDvhpnayM8JsTZiOIZlrNHqpTcXyZGA57E",
    authDomain: "facebook-clone-cfb91.firebaseapp.com",
    databaseURL: "https://facebook-clone-cfb91.firebaseio.com",
    projectId: "facebook-clone-cfb91",
    storageBucket: "facebook-clone-cfb91.appspot.com",
    messagingSenderId: "59714952983",
    appId: "1:59714952983:web:c1ccc54a4e7654bb39e152",
    measurementId: "G-3QT0J9N9L1"
  };

firebase.initializeApp(firebaseConfig)

const db = firestore()

export {db}

