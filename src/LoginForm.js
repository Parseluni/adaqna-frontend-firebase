import React, { useState, useContext } from "react";
import "./LoginForm.css";
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase";
import { Button } from "@material-ui/core";
import UserContext from "./UserContext";

function LoginForm() {

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
                login(auth.user.uid)
                history.push('/')
            })
            .catch(error => alert(error.message))
    }

    return(
        <div className="login">

            <Link to ='/'>
                <div id="login__logo">
                    <img height="300" src="/logo.png" alt="Logo" />
                </div>
            </Link>

            {/* <div id="banner_image"></div> */}

            <div className="login__container">
                <form>
                    <h5>Email</h5>
                    <input type="text" value={email} onChange={event => setEmail(event.target.value)}/>

                    <h5>Password</h5>
                    <input type="password" value={password} onChange={event => setPassword(event.target.value)}/>

                    <div>
                        <Button variant="outlined" type="submit" className="submit__button" fullWidth onClick={logIn}>Log in</Button>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default LoginForm;