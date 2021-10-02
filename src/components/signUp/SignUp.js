import React,{useState,useContext} from "react";
import {useHistory} from 'react-router-dom';
import "./SignUp.css";
import LoadingButton from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import TextField from "@mui/material/TextField";
import { AuthContext } from "../../context/Authprovider";

function SignUp() {
  const { signUpWithEmailAndPass } = useContext(AuthContext);
  const [userDetails, setUserDetails] = useState({
    username: "",
    password: "",
  });
  const { username, password } = userDetails;
  const history = useHistory();
  function inputChange(e) {
    setUserDetails((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }
  function signUp(e) {
    e.preventDefault();
    signUpWithEmailAndPass(username, password).then(res=>history.push("/"),err=>console.log("error while signup"))
  }
  return (
    <div className="signUp">
      <h3>Sign Up</h3>
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

      <LoadingButton
        color="secondary"
        onClick={signUp}
        startIcon={<SendIcon />}
        variant="contained"
        disabled={!password}
      >
        Send
      </LoadingButton>
    </div>
  );
}

export default SignUp;
