import React, { createContext, useContext, useState, useReducer } from "react";
import db from "./firebase";

// function  UserContext to initiate context 
// const UserContext = createContext({ username: '', auth: false });
const UserContext = createContext();

// // Wrap our app and provide the Data layer
// export const UserProvider = ({ reducer, initialState, children }) => (
//   <UserContext.Provider value={useReducer(reducer, initialState)}>
//     {children}
//   </UserContext.Provider>
// );

// // Pull information from the data layer
// export const useStateValue = () => useContext(UserContext);

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
          }
          setUser((user) => (
            loggedInUserData
          ))
          localStorage.setItem("user", JSON.stringify(loggedInUserData))
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
