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
    router.push("/login");
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
    });
  };

  return (
    <nav className="bg-white border-2 border-gray-800 px-2 sm:px-4 py-3">
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        <Link
          href="/"
          className="flex items-center self-center text-xl font-semibold whitespace-nowrap"
        >
          HabitHero
        </Link>
        <Link
          href="/"
          className=" ml-auto justify-end text-xl font-semibold mr-10"
        >
          Home
        </Link>
        <Link href="/about" className="self-center text-xl font-semibold mr-10">
          About
        </Link>
        {!isAuth ? (
          <>
            <Link href="/login" className="self-center text-xl font-semibold">
              Login
            </Link>
          </>
        ) : (
          <>
            <Link
              href="/habits"
              className="self-center text-xl font-semibold mr-10"
            >
              Habits
            </Link>
            <button
              onClick={signUserOut}
              className="self-center text-xl font-semibold"
            >
              Log Out
            </button>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
