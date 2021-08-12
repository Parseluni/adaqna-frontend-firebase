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



// function UserProvider to provide our initiated context
export const UserProvider = ({ children }) => {
    const [user, setUser] = useState({ username: '', auth: false });
  
    // Login updates the user data with a username parameter
    const login = (email) => {
      db
        .collection("users")
        .doc(email)
        .get()
        .then((userRef) => {
          setUser((user) => ({
            username: userRef.data().username,
            auth: true,
          }));
        });
    };
    
    // Logout updates the user data to default
    const logout = () => {
      setUser((user) => ({
        username: '',
        auth: false,
      }));
    };
  
    return (
      <UserContext.Provider value={{ user, login, logout }}>
        {children}
      </UserContext.Provider>
    );
  }


  export default UserContext;
