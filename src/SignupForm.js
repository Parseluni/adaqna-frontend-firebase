import React, { useState, useContext } from "react";
import "./LoginForm.css";
import { Link, useHistory } from "react-router-dom";
import db, { auth } from "./firebase";
import { Button } from "@material-ui/core";
import UserContext from "./UserContext";

function SignupForm() {
  const { login } = useContext(UserContext);

  const history = useHistory();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signUp = (event) => {
    event.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        if (auth) {
          console.log(auth.user);
          // auth.user.email
          // find the db collection of users, then the doc to reference the email you already have, then set the data you want to set (username)
          db.collection("users")
            .doc(auth.user.uid)
            .set({ username: username, created_at: Date.now() });
          login(auth.user.uid);
          history.push("/");
        }
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <Link to="/">
        <div id="login__logo">
          <img height="300" src="/logo.png" alt="Logo" />
        </div>
      </Link>

      <div id="banner_image"></div>

      <div className="login__container">
        <form>
          <h5>Username</h5>
          <input
            type="text"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />

          <h5>Email</h5>
          <input
            type="text"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />

          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />

          <div>
            <Button
              variant="outlined"
              type="submit"
              className="submit__button"
              fullWidth
              onClick={signUp}
            >
              Sign up
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default SignupForm;
