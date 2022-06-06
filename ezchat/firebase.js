// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC-fSr-d9tebhXA4W81ER9Xa4Cm5uUu1QI",
    authDomain: "ezchat-28245.firebaseapp.com",
    projectId: "ezchat-28245",
    storageBucket: "ezchat-28245.appspot.com",
    messagingSenderId: "608782617325",
    appId: "1:608782617325:web:762b63086cb729f8c59ae4"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };