import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import "./Navbar.css";
import { BrowserRouter as Router, NavLink } from "react-router-dom";
function Navbar() {
  return (
    <div>
      <AppBar position="static">
        <Toolbar className="toolbar">
          <h3>EMPLOYEE MANAGEMENT</h3>
          <div className="navSection">
            <Router>
              <NavLink exact to="/home" activeClassName="selected">
                <p>Home</p>
              </NavLink>
              <NavLink exact to="/add emp" activeClassName="selected">
                <p>Add Employee</p>
              </NavLink>
            </Router>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar;
