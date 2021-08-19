import React, { forwardRef, useState, useContext, useEffect } from "react";
import "./Question.css";
import { Avatar } from "@material-ui/core";
import ArrowUpwardOutlinedIcon from "@material-ui/icons/ArrowUpwardOutlined";
import ArrowDownwardOutlinedIcon from "@material-ui/icons/ArrowDownwardOutlined";
import MessageOutlinedIcon from "@material-ui/icons/MessageOutlined";
import AnswerBox from "./AnswerBox.js";
import GlobalAnswerButton, { AnswerBoxOpener } from "./GlobalAnswerButton";
import UserContext from "./UserContext";
import { SignalCellularNull } from "@material-ui/icons";
import Answer from "./Answer";
import db from "./firebase";
import { Link } from "react-router-dom";

const Question = forwardRef(
  ({ avatar, username, text, timestamp, question_id, votes }, ref) => {
    const readableDate = new Date(timestamp).toDateString();

    const { user } = useContext(UserContext);
    const [showTextBox, setShowTextBox] = useState(false);
    const [answers, setAnswers] = useState([]);
    const [showAnswers, setShowAnswers] = useState(false);

    const showAnswersNumber = (answersNumber) => {
      if (answersNumber === 0) {
        return "No answers yet";
      } else if (answersNumber === 1) {
        return "1 answer";
      } else {
        return `${answersNumber} answers`;
      }
    };

    const increaseVotes = (answer_id) => {
      try {
        db.collection("questions")
          .doc(question_id)
          .collection("answers")
          .doc(answer_id)
          .get()
          .then((answer) => {
            const data = answer.data()
            const newVotes = data.votes + 1;
            db.collection("questions")
              .doc(question_id)
              .collection("answers")
              .doc(answer_id)
              .update({
                votes: newVotes,
              });
          });
      } catch (err) {
        console.log(err);
      }
    };

    const decreaseVotes = (answer_id) => {
      try {
        db.collection("questions")
          .doc(question_id)
          .collection("answers")
          .doc(answer_id)
          .get()
          .then((answer) => {
            const data = answer.data()
            const newVotes = data.votes - 1;
            db.collection("questions")
              .doc(question_id)
              .collection("answers")
              .doc(answer_id)
              .update({
                votes: newVotes,
              });
          });
      } catch (err) {
        console.log(err);
      }
    };

    const showAnswerBox = (event) => {
      event.preventDefault();
      setShowTextBox(true);
    };

    // if user is logged in, show them an "Answer" button that when they click
    // opens (via onClick) the AnswerBox

    // if user clicked on Answer, show box and hide button

    // if the user is logged out, show them an "Answer" button that takes them
    // to the /signup link

    const answerBoxWhenLoggedIn = () => {
      if (showTextBox) {
        return null;
      } else {
        return (
          <AnswerBoxOpener
            Icon={MessageOutlinedIcon}
            text="Answer"
            onClick={showAnswerBox}
          />
        );
      }
    };

    const answerBoxWhenLoggedOut = () => {
      return (
        <GlobalAnswerButton
          Icon={MessageOutlinedIcon}
          link="/signup"
          text="Answer"
        />
      );
    };

    // if the button x answers has been clicked, useEffect to show all answers:
    useEffect(() => {
      db.collection("questions")
        .doc(question_id)
        .collection("answers")
        .onSnapshot((snapshot) =>
          setAnswers(
            snapshot.docs.map((doc) => {
              console.log(answers);
              return { id: doc.id, ...doc.data() };
            })
          )
        );
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // limiter of useEffect??? only do this when you see a change in variable

    const answerLink = () => {
      return user.auth ? answerBoxWhenLoggedIn() : answerBoxWhenLoggedOut();
    };

    return (
      <div className="question" ref={ref}>
        <div className="question__header">
          <div className="question__avatar">
            <Avatar src={avatar} />
          </div>
          <div className="question__headerText">
            <h3 id="question__username">{username}</h3>
            <h5 id="question__date">{readableDate}</h5>
          </div>
          <div className="question__headerTimestamp"></div>
        </div>

        <div className="question__text">
          <h3>{text}</h3>
        </div>

        {/* <Link onClick={() => setShowAnswers(true)} className="question__answersLink">{answersNumberLength} Answers</Link> */}
        <Link
          onClick={() => setShowAnswers(true)}
          className="question__answersLink"
        >
          {showAnswersNumber(answers.length)}
        </Link>

        {showAnswers && (
          <div>
            {answers.map((answer) => (
              <Answer
                key={answer.id}
                avatar={Avatar}
                username={answer.username}
                text={answer.text}
                timestamp={answer.timestamp}
                votes={answer.votes}
                answer_id={answer.id}
                increaseVotes = {() => increaseVotes(answer.id)}
                decreaseVotes = {() => decreaseVotes(answer.id)}
              />
            ))}
          </div>
        )}

        <div className="question__footer">
          {/* <ArrowUpwardOutlinedIcon fontSize="small" /> 
                <section className="votes">
                    {votes}
                </section>
                <ArrowDownwardOutlinedIcon fontSize="small" /> */}
          {/* <MessageOutlinedIcon fontSize="small" />  */}

          {showTextBox && user.auth ? (
            <AnswerBox
              question_id={question_id}
              setShowTextBox={setShowTextBox}
            />
          ) : null}

          {answerLink()}
        </div>
      </div>
    );
  }
);

export default Question;
