import firebase from "firebase/app";
import "firebase/auth"

const app = firebase.initializeApp({
    apiKey: "AIzaSyA0uRWntISBYn79NVSeF5GaQBelR3ieEKA",
    authDomain: "airbnb-clone-2a9ac.firebaseapp.com",
    databaseURL: "https://airbnb-clone-2a9ac-default-rtdb.firebaseio.com",
    projectId: "airbnb-clone-2a9ac",
    storageBucket: "airbnb-clone-2a9ac.appspot.com",
    messagingSenderId: "393117665282",
    appId: "1:393117665282:web:dba7d817c6d5ccefd3ff1b"
})

export const auth = app.auth()
export default app