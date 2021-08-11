import React, { createContext, useState } from "react";

// function  UserContext to initiate context 
const UserContext = createContext({ username: '', auth: false });
// This also works: const UserContext = createContext();

// function UserProvider to provide our initiated context
export const UserProvider = ({ children }) => {
    const [user, setUser] = useState({ username: '', auth: false });
  
    // Login updates the user data with a username parameter
    const login = (username) => {
      setUser((user) => ({
        username: username,
        auth: true,
      }));
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
