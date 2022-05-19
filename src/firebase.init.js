// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.REACI_APP_APIKEY,
    authDomain: process.env.REACI_APP_PROJECTID,
    projectId: process.env.REACI_APP_AUTHDOMAIN,
    storageBucket: process.env.REACI_APP_STORAGEBUCKET,
    messagingSenderId: process.env.REACI_APP_MESSAGINGSENDERID,
    appId: process.env.REACI_APP_APPID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth