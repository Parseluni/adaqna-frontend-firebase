import React, { forwardRef, useState, useContext } from "react";
import "./Question.css";
import { Avatar } from "@material-ui/core";
import ArrowUpwardOutlinedIcon from "@material-ui/icons/ArrowUpwardOutlined";
import ArrowDownwardOutlinedIcon from "@material-ui/icons/ArrowDownwardOutlined";
import MessageOutlinedIcon from "@material-ui/icons/MessageOutlined";
import AnswerBox from "./AnswerBox.js";
import SidebarOption, { AnswerBoxOpener } from "./SidebarOption";
import UserContext from "./UserContext";
import { SignalCellularNull } from "@material-ui/icons";

const Question = forwardRef(
  ({ avatar, username, text, timestamp, question_id, votes }, ref) => {
    const readableDate = new Date(timestamp).toDateString();
    console.log(username);

    const { user } = useContext(UserContext);
    const [showTextBox, setShowTextBox] = useState(false);
    // const [isLoggedIn, setShowTextBox] = useState(false);

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
        return <AnswerBoxOpener text="Answer" onClick={showAnswerBox} />;
      }
    };

    const answerBoxWhenLoggedOut = () => {
      return (
        <SidebarOption
          Icon={MessageOutlinedIcon}
          link="/signup"
          text="Answer"
        />
      );
    };

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
            <h3>{username}</h3>
            <h5>{readableDate}</h5>
          </div>
          <div className="question__headerTimestamp"></div>
        </div>

        <div className="question__text">
          <h3>{text}</h3>
        </div>
        <div className="question__footer">
          {/* <ArrowUpwardOutlinedIcon fontSize="small" /> 
                <section className="votes">
                    {votes}
                </section>
                <ArrowDownwardOutlinedIcon fontSize="small" /> */}
          {/* <MessageOutlinedIcon fontSize="small" />  */}

          {/* <AnswerBox questionId=<firebase_question_id> */}
          {showTextBox && user.auth ? (
            <AnswerBox question_id={question_id} />
          ) : null}

          {answerLink()}
        </div>
      </div>
    );
  }
);

export default Question;
