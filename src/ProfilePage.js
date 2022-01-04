import React, { useEffect, useState, useContext } from "react";
import FlipMove from "react-flip-move";
import { Avatar } from "@material-ui/core";
import UserContext from "./UserContext";
import Question from "./Question";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Topics from "./Topics";
import db from "./firebase";
import { useLocation } from "react-router-dom";


// Refreshing the page does not rerender it
function ProfilePage() {

  const location = useLocation();
  const { user } = useContext(UserContext);
  const [questions, setQuestions] = useState([]);

  const [currentFilter, setCurrentFilter] = useState(null);

  const handleTopicFilter = (topic) => {
    setCurrentFilter(topic);
  };

  // this will trigger a render 2x, instead of 1x; how can we improve this?
  useEffect(() => {
    if (location.state) {
      // is it an antipattern to be calling functions that setState inside
      // useEffect?
      setCurrentFilter(location.state.currentFilter);
    }
  }, [location.state, currentFilter]);

  useEffect(() => {
    db.collection("questions")
      .where("username", "==", user.username)
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setQuestions(
          snapshot.docs.map((doc) => {
            return { id: doc.id, ...doc.data() };
          })
        )
      );
  }, [user.username]);

  let filteredQuestions = questions;
  console.log(questions);

  if (currentFilter) {
    filteredQuestions = questions.filter((question) => {
      return question.topic === currentFilter;
    });
  }

  return (
    <div>
      <Header />
      <div className="app">
        <Sidebar />

        <div className="feed">
          <FlipMove>
            {filteredQuestions.map((question) => (
              <Question
                key={question.id}
                avatar={Avatar}
                username={question.username}
                text={question.text}
                timestamp={question.timestamp}
                votes={question.votes}
                question_id={question.id}
                topic={question.topic}
              />
            ))}
          </FlipMove>
        </div>

        <Topics handleTopicFilter={handleTopicFilter} />

      </div>
    </div>
  );
}

export default ProfilePage;
