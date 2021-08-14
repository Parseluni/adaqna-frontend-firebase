import React, { useEffect, useState } from "react";
import Question from "./Question";
import { Avatar } from "@material-ui/core";
import db from "./firebase";
import FlipMove from "react-flip-move";
import "./Feed.css";

function Feed() {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    db.collection("questions").onSnapshot((snapshot) =>
      setQuestions(snapshot.docs.map((doc) => {
        return {id:doc.id, ...doc.data()}
      }))
    );
  }, []);

  console.log(questions);

  return (
    // <div className="feed">
    <div>
      {/* Questions feed */}
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
          />
        ))}
      </FlipMove>
    </div>
  );
}

export default Feed;
