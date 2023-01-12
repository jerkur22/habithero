import "../styles/globals.css";
import Navbar from "../components/Navbar";
import { useState, createContext } from "react";
import { AppContext } from "../contexts/AuthContext";

export default function App({ Component, pageProps }) {
  const [isAuth, setIsAuth] = useState(false);

  return (
    <AppContext.Provider value={{ isAuth, setIsAuth }}>
      <Navbar />
      <Component {...pageProps} />
    </AppContext.Provider>
  );
}
