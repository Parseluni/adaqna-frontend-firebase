import React, { useContext } from "react";
import "./Header.css";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import UserContext from "./UserContext";


function Header() {
  const { user, logout } = useContext(UserContext);

  return (
    <div className="header__container">
      <div className="header">
        <div className="header__logo">
          <img src="/logo.png" alt="Logo" />
        </div>
        <div className="header__center"></div>
        {user.auth ? (
          <div className="header__loggedIn header__right">
            <Button
              variant="outlined"
              className="header__buttons"
              fullWidth
              onClick={logout}
            >
              Log out
            </Button>
            <div id="username">Hi {user.username}!</div>
          </div>
        ) : (
          <div className="header__right">
            <div className="button__left">
              <Link to="/login">
                <Button
                  variant="outlined"
                  className="header__buttons"
                  fullWidth
                >
                  Log in
                </Button>
              </Link>
            </div>
            <div className="button__right">
              <Link to="/signup">
                <Button
                  variant="outlined"
                  className="header__buttons"
                  fullWidth
                >
                  Sign up
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>

      <div id="bannerimage"></div>
    </div>
  );
}

export default Header;
