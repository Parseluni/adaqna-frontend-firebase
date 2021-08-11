import React, { useState, useContext } from "react";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase";
import { Event } from "@material-ui/icons";
import UserContext from "./UserContext";

function Login() {

    const { login } = useContext(UserContext);
    // const [username, setUsername] = useState();
    
    const history = useHistory();
    const [email, setEmail] = useState(''); 
    const [password, setPassword] = useState(''); 

    const logIn = event => {
        event.preventDefault()

        auth
            .signInWithEmailAndPassword(email, password)
            .then((auth) => {
                console.log(auth.user)
                login(auth.user.email)
                history.push('/')
            })
            .catch(error => alert(error.message))
    }


    const signUp = event => {
        event.preventDefault()

        auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                if (auth) {
                    history.push('/')
                }
            })
            .catch(error => alert(error.message))
    }

    return(
        <div className="login">

            <Link to ='/'>
                {/* LOGO IMAGE HERE */}
                <div id="login__logo">
                    <img height="300" src="/logo.png" alt="Logo" />
                </div>
            </Link>

            <div id="banner_image"></div>

            <div className="login__container">
                <form>
                    <h5>Email</h5>
                    <input type="text" value={email} onChange={event => setEmail(event.target.value)}/>

                    <h5>Password</h5>
                    <input type="password" value={password} onChange={event => setPassword(event.target.value)}/>

                    <div className="login__button">
                        <button type="submit" onClick={logIn}>Log in</button>
                        <button type="submit" onClick={signUp}>Sign up</button>
                        {/* Toggle back to false ?? */}
                    </div>
                </form>
            </div>
        </div>
    )
}
export default Login;