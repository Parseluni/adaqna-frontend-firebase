import React, { useContext } from "react";
import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import Topic from "./Topics";
import UserContext from './UserContext';
import QuestionBox from "./QuestionBox";


function HomePage() {

  const { user } = useContext(UserContext);

  return ( 

    <div>

        <Header />
        <div className="app">

            <Sidebar />

            <div className="feed">
                {user.auth ? <QuestionBox /> : ""}
                <Feed />
            </div>

            <Topic />
        
        </div>

    </div>

  );
}

export default HomePage;
