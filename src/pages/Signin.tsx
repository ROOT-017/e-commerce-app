// import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import React, { useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAppDispatch } from "../store/hooks";
import { toggleSpinderModel, toggleToast } from "../store/modalSlice";
import { signin } from "../store/authSlice";
import { SignInWithEmailAndPassword } from "../auth/firebase";
// import { , useAppDispatch } from "../store/hooks";

const Signin = () => {
  const email = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);
  const [error, setError] = useState<string>("");
  // const isSpinder = useAppSelector((state) => state.modal.isSpinder);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const origin = location.state?.from || "/";

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const emailValue = email.current?.value;
    const passwordValue = password.current?.value;
    if (!emailValue || !passwordValue) {
      setError("All fields are required");
      return;
    }
    setError("");
    dispatch(toggleSpinderModel(true));

    const res: any = await SignInWithEmailAndPassword(
      emailValue,
      passwordValue
    );
    dispatch(toggleSpinderModel(false));

    if (res?.error) {
      console.log(res?.error);
      let err;
      const errrType = res.msg.split("/")[1].split("-")[0];
      if (errrType === "network") {
        err = "Network Failure, Check your network";
      } else {
        err = "Wrong Password or Email";
      }
      dispatch(
        toggleToast({
          value: true,
          options: {
            severity: "error",
            summary: "Fail",
            detail: err || "Fail",
            life: 3000,
          },
        })
      );

      setTimeout(() => {
        dispatch(
          toggleToast({
            value: false,
            options: null,
          })
        );
      }, 3000);

      setError(err || "Fail");
      return;
    }

    email.current!.value = "";
    password.current!.value = "";
    dispatch(
      signin({
        email: res.email,
        uid: res.uid,
        token: res.stsTokenManager.accessToken,
      })
    );
    navigate(origin, { replace: true });
  };

  return (
    <div className=" font-poppins text-gray-500 p-2">
      <h1 className="text-xl text-center py-4 ">SIGN IN</h1>
      <div>
        <form action="" onSubmit={handleSubmit}>
          <div className="flex flex-col pt-2">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              ref={email}
              className="p-2 text-xl border-2 focus:outline-none border-cambridge_blue-600 rounded-lg"
            />
          </div>
          <div className="flex flex-col pt-2">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              ref={password}
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
          </p>
          <div className="flex justify-end pt-4">
            <button
              type="submit"
              className="bg-gradient-to-r from-cambridge_blue-500 to-burnt_sienna-500 py-2 px-4 rounded-lg text-white font-semibold"
            >
              Sign In
            </button>
          </div>
          <p className="text-sm pt-2">
            Don't have an account?{" "}
            <span className="text-cambridge_blue-600 cursor-pointer">
              <Link to={"/auth/signup"}> Sign In</Link>
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signin;
