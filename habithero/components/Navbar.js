import Link from "next/link";
import { useState } from "react";
import { useContext } from "react";
import { AppContext } from "../contexts/AuthContext";
import { signOut } from "firebase/auth";
import { auth, provider } from "../firebaseconfig";
import { Router, useRouter } from "next/router";
function Navbar(props) {
  const { isAuth, setIsAuth } = useContext(AppContext);
  const router = useRouter();

  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      router.push("/");
    });
  };

  return (
    <div>
      <div className="justify-center ">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        {!isAuth ? (
          <>
            <Link href="/login">Login</Link>
          </>
        ) : (
          <>
            <Link href="/habits">Habits</Link>
            <button onClick={signUserOut}>Log Out</button>
          </>
        )}
      </div>
    </div>
  );
}

export default Navbar;
