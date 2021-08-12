import React, { useContext, useEffect } from "react";
import "./App.css";
import UserContext from "./UserContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import HomePage from "./HomePage";
import { auth } from "./firebase";
import { useStateValue } from "./UserContext";


function App() {

  const { user } = useContext(UserContext);


  // const [{}, dispatch] = useStateValue();

  // useEffect(() => {
  //     auth.onAuthStateChanged(authUser => {
  //       console.log("The user is >>> ", authUser);
  //       if (authUser) {
  //         // user just logged in, or already loggeg in 
  //         dispatch({
  //           type: "SET_USER",
  //           user: authUser
  //         })
  //       } else {
  //         // user logged out
  //         dispatch({
  //           type: "SET_USER",
  //           user: null
  //         })
  //       }
  //     })
  // }, [])

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

          <Route path="/signup">
            <SignupForm />
          </Route>

          <Route path="/">
            <HomePage />
          </Route>

        </Switch>
    </Router>

  );
}

export default App;
