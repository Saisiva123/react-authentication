import React, { useEffect,useContext } from "react";
import { Redirect, Route } from "react-router-dom";
// import AuthService from "../services/auth.service";
import {AuthContext} from "../context/Authprovider";

const ProtectedHomeRoute = ({ Component, ...restProps }) => {
  const {user} = useContext(AuthContext)
  return (
    <Route
      {...restProps}
      render={(props) => {
        <Component {...props} />
        if (user && localStorage.getItem('usertoken')) {
          return <Component {...props} />;
        } else {
          <Redirect
            exact
            to={{
              pathname: "/",
              state: { from: props.location },
            }}
          />;
        }
      }}
    />
  );
};

export default ProtectedHomeRoute;
