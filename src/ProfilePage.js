import React, { useEffect, useState, useContext } from "react";
import FlipMove from "react-flip-move";
import { Avatar } from "@material-ui/core";
import UserContext from "./UserContext";
import Question from "./Question";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Topics from "./Topics";
import db from "./firebase";

function ProfilePage(props) {
  const { user } = useContext(UserContext);
  const [questions, setQuestions] = useState([]);

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

  return (
    <div>
      <Header />
      <div className="app">
        <Sidebar />

        <div className="feed">
          <FlipMove>
            {questions.map((question) => (
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

        <Topics handleTopicFilter={props.handleTopicFilter} />

      </div>
    </div>
  );
}

export default ProfilePage;
