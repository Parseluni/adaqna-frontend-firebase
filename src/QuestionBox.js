import React, { useEffect, useState, useContext } from "react";
import "./QuestionBox.css";
import { Avatar, Button } from "@material-ui/core";
import db from "./firebase";
import UserContext from "./UserContext";
import { FormatColorReset } from "@material-ui/icons";

function QuestionBox() {
  const { user } = useContext(UserContext);

  const [questionText, setQuestionText] = useState("");
  const [showDropDown, setShowDropDown] = useState(false);
  const [topicSelection, setTopicSelection] = useState("");
  const [validQuestion, setValidQuestion] = useState(false);
  const [validTopic, setValidTopic] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

// set error message

  useEffect(() => {
    db.collection("questionText").onSnapshot((snapshot) =>
      setQuestionText(snapshot.docs.map((doc) => doc.data()))
    );
  }, []);

  const handleTopicSelection = (event) => {
    setTopicSelection(event.target.value);
    if (event.target.value !== "") {
        setValidTopic(true)
    } else {
        setValidTopic(false)
        setErrorMessage("Please choose a topic")
    }
  };

  const handleQuestionInput = (event) => {
    setQuestionText(event.target.value);
    event.target.value !== "" ? setValidQuestion(true) : setValidQuestion(false);
  };

  const sendQuestion = (event) => {
    event.preventDefault();
    console.log(event);

    // check if question and topic have a value, if not, add error message
    // function InvalidMsg(textbox) {
    // if (questionText === "") {
    //     return (<h3>Please enter a question</h3>);
    // }

    
    // user context data population, query data.user
    try {
      db.collection("questions").add({
        // avatar: {Avatar},
        username: user.username,
        text: questionText,
        timestamp: Date.now(),
        topic: topicSelection,
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
            Topic:
            <select className="topic_dropdown" onChange={handleTopicSelection} value={topicSelection}>
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
        )}

        {/* WHY IS THIS NOT WORKING?? */}
        {/* {questionText && topicSelection ? (
          <Button
            onClick={sendQuestion}
            type="submit"
            className="questionBox__button"
          >
            Ask
          </Button>
        ) : (
          <Button
            onClick={sendErrorMessage}
            type="submit"
            className="questionBox__button"
          >
            Ask
          </Button>
        )} */}

        {/* ADD && with the other valid Input */}
        {((validQuestion === true) && (validTopic === true)) ? <Button
          onClick={sendQuestion}
          type="submit"
          className="questionBox__button"
        >
          Ask
        </Button>: <Button className="questionBox__button">Ask</Button>
}

      </form>
    </div>
  );
}

export default QuestionBox;

