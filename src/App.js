import React, { useContext, useEffect } from "react";
// import "./App.css";
import UserContext from "./UserContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import HomePage from "./HomePage";
import LinksPage from "./LinksPage";
import { auth } from "./firebase";
import { useStateValue } from "./UserContext";


function App() {

  return ( 

    <Router>
        <Switch>

          <Route path="/login">
            {/* {user.auth ? <AuthApp /> : <Login />} */}
            <LoginForm />
          </Route>

          <Route path="/signup">
            <SignupForm />
          </Route>

          <Route path="/links">
            <LinksPage />
          </Route>

          <Route path="/">
            <HomePage />
          </Route>

        </Switch>
    </Router>

  );
}

export default App;
