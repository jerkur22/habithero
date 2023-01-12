import React from "react";
import { auth, provider } from "../firebaseconfig";
import { signInWithPopup } from "firebase/auth";
function Login(props) {
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {});
  };
  return (
    <div>
      <h1>Login</h1>
      <p>Sign in With Google to Continue</p>
      <button>Sign in with Google</button>
    </div>
  );
}

export default Login;
