// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCuPk9zhJKF_Hs3HCuopaGhl9yZ6JbxMr8",
    authDomain: "doctors-portal-281da.firebaseapp.com",
    projectId: "doctors-portal-281da",
    storageBucket: "doctors-portal-281da.appspot.com",
    messagingSenderId: "482552861602",
    appId: "1:482552861602:web:fe67595d34d2a581fed8fb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth