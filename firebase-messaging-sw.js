// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAc5UTq8YcCblJFyQzJTl6wrjkVSCsBuEs",
    authDomain: "attendancepwa-e8305.firebaseapp.com",
    projectId: "attendancepwa-e8305",
    storageBucket: "attendancepwa-e8305.appspot.com",
    messagingSenderId: "751666883415",
    appId: "1:751666883415:web:82cbb0080bc6a3f30a6c12",
    measurementId: "G-HTR85R42RM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);