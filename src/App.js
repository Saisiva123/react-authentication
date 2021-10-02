import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import SignIn from "./components/signin/SignIn";
import ProtectedHomeRoute from "./protectedRoutes/protectedHome.route";
import Authprovider from "./context/Authprovider";
import SignUp from "./components/signUp/SignUp";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Router>
        <Switch>
          <Authprovider>
            <Route exact path="/" component={ SignIn} />
            <Route exact path="/SignUp" component={SignUp} />
          <ProtectedHomeRoute
            exact
            path="/home"
            component={Home}
          ></ProtectedHomeRoute>
          </Authprovider>
          <Route path="*" component={() => "not found"} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
