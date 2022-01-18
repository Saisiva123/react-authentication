import React, {useContext,useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import "./Navbar.css";
import { BrowserRouter as Router, NavLink, useHistory } from "react-router-dom";
import { AuthContext } from "../../context/Authprovider";

function Navbar() {
  const history = useHistory();
  const {user,logout} = useContext(AuthContext)
useEffect(() => {
  console.log("user is",user)
}, [])
  return (
    <div>
      <AppBar position="static">
        <Toolbar className="toolbar">
          <h3>EMPLOYEE MANAGEMENT</h3>
          <div className="navSection">
            {user ? (
              <Router>
                <NavLink to="/home" activeClassName="selected">
                  <p>Home</p>
                </NavLink>
                <NavLink to="/add-emp" activeClassName="selected">
                  <p>Add Employee</p>
                </NavLink>
                <p onClick={logout} style={{ cursor: "pointer" }}>
                  logout
                </p>
              </Router>
            ) : null}
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar;
