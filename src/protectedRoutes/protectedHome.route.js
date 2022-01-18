import React, { useEffect, useContext } from "react";
import { Redirect, Route } from "react-router-dom";
// import AuthService from "../services/auth.service";
import { AuthContext } from "../context/Authprovider";

const ProtectedHomeRoute = ({ component: Component, ...restProps }) => {
  const data = "dsdf";
  return (
    <Route
      {...restProps}
      render={(props) =>
        localStorage.getItem("userToken") ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: "/" }} />
        )
      }
    />
  );
};

export default ProtectedHomeRoute;
