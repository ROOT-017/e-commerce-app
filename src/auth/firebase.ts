import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

//Inport User type from firebase
// import { User } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAFMCx8iTGqf4RIWhzJFeJLhYXZn1WNYuc",//process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "-commerce-c12aa.firebaseapp.com",// process.env.REACT_APP_FIREBASE_DOMAIN,
  projectId: "e-commerce-c12aa",//process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: "e-commerce-c12aa.appspot.com",// process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: "373295186681",//process.env.REACT_APP_FIREBASE_SENDER_ID,
  appId: "1:373295186681:web:53837b0c3d7764a1fd9828"// process.env.REACT_APP_FIREBASE_APP_ID,
};

const firebaseApp = initializeApp(firebaseConfig);

const auth = getAuth(firebaseApp);

export { auth };

export const SignUpWithEmailAndPassword = async (
  email: string,
  password: string
) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    return res.user;
  } catch (error: any) {
    return {
      error: error,
      msg: error.message,
    };
  }
};

export const SignInWithEmailAndPassword = async (
  email: string,
  password: string
) => {
  try {
    const res = await signInWithEmailAndPassword(auth, email, password);
    return res.user;
  } catch (error: any) {
    return {
      error: error,
      msg: error.message,
    };
  }
};

export const SignOut = async () => {
  try {
    await signOut(auth);
    return {
      success: true,
      msg: "Signout successfully",
    };
  } catch (error: any) {
    return {
      error: error,
      msg: error?.message ? error.message : "Something went wrong",
    };
  }
};

export const SignInWithGoogle = async () => {
  const provider = new GoogleAuthProvider();
  try {
    const res = await signInWithPopup(auth, provider);
    return res.user;
  } catch (error: any) {
    return {
      error: error,
      msg: error.message,
    };
  }
};
