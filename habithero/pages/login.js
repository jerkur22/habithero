import React from "react";
import { auth, provider } from "../firebaseconfig";
import { signInWithPopup } from "firebase/auth";
import { useContext } from "react";
import { AppContext } from "../contexts/AuthContext";
import { Router, useRouter } from "next/router";

function Login(props) {
  const { isAuth, setIsAuth } = useContext(AppContext);
  const router = useRouter();
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
      localStorage.setItem("isAuth", true);
      setIsAuth(true);
      router.push("/about");
    });
  };
  return (
    <div>
      <h1>Login</h1>
      <p>Sign in With Google to Continue</p>
      <button onClick={signInWithGoogle}>Sign in with Google</button>
    </div>
  );
}

export default Login;
