import React, { useContext, useState } from 'react';
import UserContext from './UserContext';
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import Topic from "./Topics";
import "./Header.css";
import { Button } from "@material-ui/core";
import "./Feed.css";
import { Link } from "react-router-dom";


function UnauthApp() {
    // const { login } = useContext(UserContext);
    // const [username, setUsername] = useState();

    return (
        <div>
            <div className="header">

                <div className="header__logo">
                    <img width="200" src="/logo.png" alt="Logo" />
                </div>

                {/* HOW DO I PASS LOGIN FORM IN HERE ??? */}
                {/* <label>Name:</label> */}
                {/* <input type="text" onChange={(event) => {setUsername(event.target.value);}}/> */}
                {/* <button onClick={() => login(username)}>Log in</button> */}

                {/* control whether this is visible: */}
                {/* <Login /> */}

                {/* Toggle form visibility with button */}
                
                <Link to ="/login">
                    <Button variant="outlined" className="header__buttons" fullWidth >Log in</Button>
                </Link>
                <Link to ="/signup">
                    <Button variant="outlined" className="header__buttons" fullWidth >Sign up</Button>
                </Link>

            </div>

            <div id="bannerimage"></div>

            <div className="app">

                <Sidebar />

                <div className="feed">
                    <Feed />
                </div>

                <Topic />

            </div>
        </div>

    );
}

export default UnauthApp;
