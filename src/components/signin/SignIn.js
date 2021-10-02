import React, { useState, useContext } from "react";
import "./SignIn.css";
import LoadingButton from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import TextField from "@mui/material/TextField";
// import AuthService from "../../../services/auth.service";
import { AuthContext } from "../../context/Authprovider";

function SignIn() {
  const [userDetails, setUserDetails] = useState({
    username: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const { username, password } = userDetails;
  const { loginWithGoogle, loginWithEmailAndPass } = useContext(AuthContext);

  // function logIn() {
  //   setLoading(true);
  //   setTimeout(() => {
  //     AuthService.logIn(username, password, () => {
  //       setLoading(false);
  //       history.push("/home");
  //     });
  //   }, 2000);
  // }

  function logIn() {
    loginWithEmailAndPass(username, password)
  }
 
  function inputChange(event) {
    setUserDetails({ ...userDetails, [event.target.name]: event.target.value });
  }

  return (
    <>
      {loading && <p>loading the page</p>}
      {!loading && (
        <div className="signIn">
          <h3>Sign In</h3>
          <TextField
            label="Enter Username"
            color="primary"
            name="username"
            value={username}
            onChange={inputChange}
          />
          <TextField
            label="Enter Password"
            color="primary"
            name="password"
            value={password}
            onChange={inputChange}
          />
          <p onClick={loginWithGoogle}>login with google</p>

          <LoadingButton
            color="secondary"
            onClick={logIn}
            startIcon={<SendIcon />}
            variant="contained"
            disabled={!password}
          >
            Send
          </LoadingButton>
        </div>
      )}
    </>
  );
}

export default SignIn;
