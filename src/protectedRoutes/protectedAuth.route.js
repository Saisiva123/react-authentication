import { Redirect, Route } from "react-router-dom";

const ProtectedAuthRoute = ({ component: Component, ...restProps }) => {
    const data = 'dsdf'
  return (
    <Route
      {...restProps}
      render={(props) => {
        if (!localStorage.getItem('userToken')) {
          return <Component {...props} />;
        } else {
         return <Redirect    
            to={{pathname: '/home'}}
          />;
        }
      }}
    />
  );
};

export default ProtectedAuthRoute;