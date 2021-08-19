import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import HomePage from "./HomePage";
import LinksPage from "./LinksPage";
import ProfilePage from "./ProfilePage";
import SettingsPage from "./SettingsPage";


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

          <Route path="/settings">
            <SettingsPage />
          </Route>

          <Route path="/profile">
            <ProfilePage />
          </Route>

          <Route path="/">
            <HomePage />
          </Route>

        </Switch>
    </Router>

  );
}

export default App;
