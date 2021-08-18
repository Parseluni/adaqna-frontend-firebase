import React, { useContext, useState } from "react";
import "./HomePage.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import Topics from "./Topics";
import UserContext from "./UserContext";
import QuestionBox from "./QuestionBox";
import { useLocation } from "react-router-dom";

function HomePage() {
  const location = useLocation();
  const { user } = useContext(UserContext);

  const [currentFilter, setCurrentFilter] = useState(null);

  const handleTopicFilter = (topic) => {
    setCurrentFilter(topic);
  };

  // this will trigger a render 2x, instead of 1x; how can we improve this?
  React.useEffect(() => {
    if (location.state) {
      // is it an antipattern to be calling functions that setState inside
      // useEffect?
      setCurrentFilter(location.state.currentFilter);
    }
  }, [location.state, currentFilter]);

  return (
    <div>
      <Header />
      <div className="app">
        <Sidebar handleTopicFilter={handleTopicFilter} currentFilter={currentFilter} />

        <div className="feed">
          {user.auth ? <QuestionBox /> : ""}
          <Feed currentFilter={currentFilter} />
        </div>

        <Topics handleTopicFilter={handleTopicFilter} />
      </div>
    </div>
  );
}

export default HomePage;
