import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import SignIn from "./components/signin/SignIn";
import ProtectedHomeRoute from "./protectedRoutes/protectedHome.route";
import Authprovider from "./context/Authprovider";
import SignUp from "./components/signUp/SignUp";
import ProtectedAuthRoute from "./protectedRoutes/protectedAuth.route";
function App() {
  return (
    <div className="App">
      <Router>
        <Authprovider>
          <Navbar></Navbar>
          <Switch>
            <ProtectedAuthRoute exact path="/" component={SignIn} />
            <ProtectedAuthRoute path="/sign-up" component={SignUp} />
            <ProtectedHomeRoute path="/home" component={Home} />
            <Route path="*" component={() => "not found"} />
          </Switch>
        </Authprovider>
      </Router>
    </div>
  );
}

export default App;
