import React, { createContext, useState } from "react";
import db from "./firebase";


const UserContext = createContext();

const retrieveUserData = () => {
    // get item form local storage
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
    return foundUser
    } else {
      return { username: '', auth: false }
    }
};

// function UserProvider to provide our initiated context
export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(retrieveUserData());

    // Login updates the user data with a username parameter
    const login = (uid) => {
      console.log(uid)
      db
        .collection("users")
        .doc(uid)
        .get()
        .then((userRef) => {
          console.log(userRef)
          const loggedInUserData = {
            username: userRef.data().username,
            auth: true,
            uid: uid,
            tag: userRef.data().tag,
            location: userRef.data().location
          }
          setUser(loggedInUserData)
          localStorage.setItem("user", JSON.stringify(loggedInUserData))
          console.log(user, "USER")
        });
    };
    
    // Logout updates the user data to default
    const logout = () => {
      setUser((user) => ({
        username: '',
        auth: false,
      }));
      localStorage.removeItem("user")
    };
  
    return (
      <UserContext.Provider value={{ user, login, logout }}>
        {children}
      </UserContext.Provider>
    );
  }

  export default UserContext;
