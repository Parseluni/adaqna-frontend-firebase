import React, { useContext } from "react";
import "./App.css";
import UserContext from "./UserContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginForm from "./LoginForm";
import HomePage from "./HomePage";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import Topic from "./Topics";
import AuthApp from './AuthApp';
import UnauthApp from './UnauthApp';
import QuestionBox from "./QuestionBox";
import { Button } from "@material-ui/core";



function App() {

  const { user } = useContext(UserContext);

  return ( 

    <Router>

{/* 
        <Link to ="/login">
          <Button variant="outlined" className="header__buttons" fullWidth >Log in trial</Button>
        </Link> */}

        <Switch>

          <Route path="/login">
            {/* {user.auth ? <AuthApp /> : <Login />} */}
            <LoginForm />
          </Route>

          <Route path="/">
            {/* {user.auth ? <AuthApp /> : <UnauthApp />} */}
            <HomePage />

          </Route>
        </Switch>
    </Router>

  );
}

export default App;
