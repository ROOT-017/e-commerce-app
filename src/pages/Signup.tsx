import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "../auth/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { login } from "../store/authSlice";
import { useAppDispatch } from "../store/hooks";

const Signup = () => {
  const dispatch = useAppDispatch();
  const name = useRef<HTMLInputElement>(null);
  const email = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);
  const passwordConfirmation = useRef<HTMLInputElement>(null);
  const [error, setError] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const nameValue = name.current?.value;
    const emailValue = email.current?.value;
    const passwordValue = password.current?.value;
    const passwordConfirmationValue = passwordConfirmation.current?.value;

    if (
      !nameValue ||
      !emailValue ||
      !passwordValue ||
      !passwordConfirmationValue
    ) {
      setError("All fields are required");
      return;
    }
    if (passwordValue !== passwordConfirmationValue) {
      setError("Passwords do not match");
      return;
    }
    setError("");

    // const auth = getAuth();
    createUserWithEmailAndPassword(auth, emailValue, passwordValue)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user as any;
        dispatch(
          login({
            name: nameValue,
            email: emailValue,
            uid: user.uid,
            token: user.stsTokenManager.accessToken,
          })
        );
        localStorage.setItem(
          "userData",
          JSON.stringify({
            name: nameValue,
            email: emailValue,
            uid: user.uid,
            token: user.stsTokenManager.accessToken,
          })
        );
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  return (
    <div className=" font-poppins text-gray-500 p-2">
      <h1 className="text-xl text-center py-4 ">SIGN UP</h1>
      <div>
        <form action="" onSubmit={handleSubmit}>
          <div className="flex flex-col">
            <label htmlFor="name" className="">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={`test name`}
              ref={name}
              className="p-2 text-xl border-2 focus:outline-none border-cambridge_blue-600 rounded-lg"
            />
          </div>
          <div className="flex flex-col pt-2">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              value={`nkwetachaterence@gmail.com`}
              ref={email}
              className="p-2 text-xl border-2 focus:outline-none border-cambridge_blue-600 rounded-lg"
            />
          </div>{" "}
          <div className="flex flex-col pt-2">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              value={`123456789`}
              min={6}
              ref={password}
              className="p-2 text-xl border-2 focus:outline-none border-cambridge_blue-600 rounded-lg"
            />
          </div>
          <div className="flex flex-col pt-2">
            <label htmlFor="passwordConfirmation">Confirm Password</label>
            <input
              type="password"
              name="passwordConfirmation"
              id="passwordConfirmation"
              ref={passwordConfirmation}
              value={`123456789`}
              min={6}
              className="p-2 text-xl border-2 focus:outline-none border-cambridge_blue-600 rounded-lg"
            />
          </div>
          <p
            style={{
              color: "red",
              fontSize: "0.8rem",
              paddingTop: "0.5rem",
            }}
          >
            {error}
          </p>{" "}
          <div className="flex justify-end pt-4 ">
            <button
              type="submit"
              className="bg-gradient-to-r from-cambridge_blue-500 to-burnt_sienna-500 py-2 px-4 rounded-lg text-white font-semibold"
            >
              Sign Up
            </button>
          </div>
        </form>
        <p className="text-sm pt-2">
          Have an account already?
          <span className="text-cambridge_blue-600 cursor-pointer ">
            <Link to={"/auth/signin"}> Sign In</Link>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Signup;
