import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { auth, googleAuthProvider } from "../firebase";

export const AuthContext = React.createContext();

function Authprovider({ children }) {
  const [user, setUser] = useState(localStorage.getItem('userToken'));
  const history = useHistory();

  function loginWithGoogle() {
    auth.signInWithPopup(googleAuthProvider).then(
      (res) => {
        localStorage.setItem(
          "userToken",
          JSON.stringify(res.user.refreshToken)
        );
        setUser(res.user.email);
        history.push("/home");
      },
      (err) => {
        console.log("error while google", err);
      }
    );
  }

  function loginWithEmailAndPass(username, password) {
    auth.signInWithEmailAndPassword(username, password).then((res) => {
      setUser(res.user.email);
      localStorage.setItem("userToken", JSON.stringify(res.user.refreshToken));
      history.push("/home");
    });
  }

  function signUpWithEmailAndPass(username, password) {
    return auth.createUserWithEmailAndPassword(username, password);
  }

  function logout() {
      localStorage.removeItem('userToken');
      setUser('')
      history.push("/");
  }

  const value = {
    user,
    loginWithGoogle,
    loginWithEmailAndPass,
    signUpWithEmailAndPass,
    logout,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default Authprovider;
