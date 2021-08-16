import React, { useContext } from "react";
import "./HomePage.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import Topics from "./Topics";
import UserContext from "./UserContext";
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

            <Topics />
        
        </div>

    </div>

  );
}

export default HomePage;
