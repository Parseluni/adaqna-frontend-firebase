import React, { useContext } from 'react';
import UserContext from './UserContext';
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import Topic from "./Topics";
import QuestionBox from "./QuestionBox";
import "./Feed.css";
import "./Header.css";
import { Button } from "@material-ui/core";


function AuthApp() {
  const { user, logout } = useContext(UserContext);

  return (
    <div>
        <div className="header">
            <div className="header__logo">
                <img width="200" src="/logo.png" alt="Logo" />
            </div>
            <Button variant="outlined" className="header__buttons" fullWidth onClick={logout}>Log out</Button>
            <div id="username">Hi {user.name}!</div>

        </div>

        <div id="bannerimage"></div>

        <div className="app">

            <Sidebar />

            <div className="feed">
                <QuestionBox />
                <Feed />
            </div>

            <Topic />

        </div>
    </div>
  );
}

export default AuthApp;
