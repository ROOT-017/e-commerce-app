import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAFMCx8iTGqf4RIWhzJFeJLhYXZn1WNYuc",
  authDomain: "e-commerce-c12aa.firebaseapp.com",
  projectId: "e-commerce-c12aa",
  storageBucket: "e-commerce-c12aa.appspot.com",
  messagingSenderId: "373295186681",
  appId: "1:373295186681:web:53837b0c3d7764a1fd9828",
};

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp)

export { auth };
