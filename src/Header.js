import React from "react";
import "./Header.css";
import { Button } from "@material-ui/core";

// THIS COMPONENT IS NOT BEING USED RIGHT NOW !!!

function Header() {

    const { user } = useContext(UserContext);

    return(
        <div className="header">

            {/* Logo */}
            <div className="header__logo">
                <h1>Q&Ada</h1>
            </div>

            {/* Login */}

            {user.auth ? 
            <Button variant="outlined" className="header__buttons" fullWidth >Log out</Button>
            : 
            <div>
                <Button variant="outlined" className="header__buttons" fullWidth >Log in</Button>
                <Button variant="outlined" className="header__buttons" fullWidth >Sign up</Button>
            </div>
            }

            {/* <Button variant="outlined" className="header__buttons" fullWidth >Log in</Button> */}




            
        </div>
    )
}

export default Header;