// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCtrUkWdEmH3mYSAQ0wxkpULcv8Z_MWCF8",
  authDomain: "anytown-real-estate.firebaseapp.com",
  projectId: "anytown-real-estate",
  storageBucket: "anytown-real-estate.appspot.com",
  messagingSenderId: "130244457367",
  appId: "1:130244457367:web:021edabd69667b95c5cad2",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export default app;
