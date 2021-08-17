import React, { useEffect, useState } from "react";
import Question from "./Question";
import { Avatar } from "@material-ui/core";
import db from "./firebase";
import FlipMove from "react-flip-move";
import "./Feed.css";

function Feed({ currentFilter }) {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    db.collection("questions").orderBy("timestamp", "desc").onSnapshot((snapshot) =>
      setQuestions(
        snapshot.docs.map((doc) => {
          return { id: doc.id, ...doc.data() };
        })
      )
    );
  }, []);

  let filteredQuestions = questions;
  console.log(questions);

  if (currentFilter) {
    filteredQuestions = questions.filter((question) => {
      return question.topic === currentFilter;
    });
  }
  // clear filter when done

  return (
    // <div className="feed">
    <div>
      {/* Questions feed */}
      {/* https://reactjs.org/docs/lists-and-keys.html#keys */}
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
  );
}

export default Feed;

// make sure function returns true if current filter matches current topic
// or return false
