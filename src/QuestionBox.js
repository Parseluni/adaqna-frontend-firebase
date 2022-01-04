import React, { useEffect, useState, useContext } from "react";
import "./QuestionBox.css";
import { Avatar, Button } from "@material-ui/core";
import db from "./firebase";
import UserContext from "./UserContext";


function QuestionBox() {
  const { user } = useContext(UserContext);

  const [questionText, setQuestionText] = useState("");
  const [showDropDown, setShowDropDown] = useState(false);
  const [topicSelection, setTopicSelection] = useState("");
  const [validQuestion, setValidQuestion] = useState(false);
  const [validTopic, setValidTopic] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    db.collection("questionText").onSnapshot((snapshot) =>
      setQuestionText(snapshot.docs.map((doc) => doc.data()))
    );
  }, []);

  const handleTopicSelection = (event) => {
    setTopicSelection(event.target.value);
    if (event.target.value !== "") {
      setValidTopic(true);
      setErrorMessage("");
    } else {
      setValidTopic(false);
      // Why does this log show validTopic is set to true???
      console.log(`validTopic is set to ${validTopic}`);
    }
  };

  const handleQuestionInput = (event) => {
    setQuestionText(event.target.value);
    event.target.value !== ""
      ? setValidQuestion(true)
      : setValidQuestion(false);
  };

  const handleQuestionWithoutTopic = (event) => {
    setErrorMessage("Please select a topic");
  };

  const sendQuestion = (event) => {
    event.preventDefault();
    console.log(event);

    // user context data population, query data.user
    try {
      db.collection("questions").add({
        // avatar: {Avatar},
        username: user.username,
        text: questionText,
        timestamp: Date.now(),
        topic: topicSelection,
        uid: user.uid,
        // votes: 7,
      });
    } catch (err) {
      console.log(err);
    }
    setQuestionText("");
    setTopicSelection(null);
    setShowDropDown(false);
    setValidQuestion(false);
    setValidTopic(false);
  };

  return (
    <div className="questionBox">
      <form>
        <div className="questionBox__input">
          <Avatar src="" />
          <input
            onChange={handleQuestionInput}
            onFocus={(event) => setShowDropDown(true)}
            value={questionText}
            placeholder="What is your question?"
            type="text"
          />
        </div>
        {showDropDown && (
          <div className="topic_text">
            <div>
              <p className="error_message">{errorMessage}</p>
            </div>
            <div>
              Topic:
              <select
                className="topic_dropdown"
                onChange={handleTopicSelection}
                value={topicSelection}
              >
                <option value=""></option>
                <option value="Essays">Essays</option>
                <option value="Code Challenge">Code Challenge</option>
                <option value="Technical Interview">Technical Interview</option>
                <option value="Final Interview">Final Interview</option>
                <option value="Application Timeline">Application Timeline</option>
                <option value="Internships">Internships</option>
                <option value="Career Prospects">Career Prospects</option>
                <option value="General">General</option>
              </select>
            </div>
          </div>
        )}

        {validQuestion === false ? (
          <Button className="questionBox__button">Ask</Button>
        ) : validTopic === true ? (
          <Button
            onClick={sendQuestion}
            type="submit"
            className="questionBox__button"
          >
            Ask
          </Button>
        ) : (
          <Button
            onClick={handleQuestionWithoutTopic}
            className="questionBox__button"
          >
            Ask
          </Button>
        )}
      </form>
    </div>
  );
}

export default QuestionBox;
