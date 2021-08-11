import React, { useContext } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import Topic from "./Topics";
import "./App.css";
import UserContext from './UserContext';
import AuthApp from './AuthApp';
import UnauthApp from './UnauthApp';
import Login from './Login';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function App() {

  const { user } = useContext(UserContext);

  return ( 
    <div>

      {/* Logo, Login and Welcome Banner */}
      {/* <Header /> */}

      <Router>
        <Switch>

          <Route path="/login">
            {user.auth ? <AuthApp /> : <Login />}
            {/* <Login /> */}
          </Route>

          <Route path="/">
            {user.auth ? <AuthApp /> : <UnauthApp />}
          </Route>

        </Switch>
      </Router>

      {/* <div id="bannerimage"></div> */}

      {/* <div className="app"> */}

        {/* Sidebar with choices */}
        {/* <Sidebar /> */}

        {/* Feed with questions*/}
        {/* <Feed /> */}

        {/* Topics list*/}
        {/* <Topic /> */}
      {/* </div> */}

    </div>
  );
}

export default App;
