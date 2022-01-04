import React, { forwardRef } from "react";
import "./Answer.css";
import { Avatar } from "@material-ui/core";
import ArrowUpwardOutlinedIcon from "@material-ui/icons/ArrowUpwardOutlined";
import ArrowDownwardOutlinedIcon from "@material-ui/icons/ArrowDownwardOutlined";


const Answer = forwardRef(
  ({ avatar, username, text, timestamp, votes, increaseVotes, decreaseVotes }, ref) => {
    const readableDate = new Date(timestamp).toDateString();

    return (
      <div className="answer" ref={ref}>
        <div className="answer__header">
          <div className="answer__avatar">
            <Avatar src={avatar} />
          </div>
          <div className="answer__headerText">
            <h3>{username}</h3>
            <h5 id="answer__date">{readableDate}</h5>
          </div>
          <div className="answer__headerTimestamp"></div>
        </div>

        <div className="answer__text">
          <p>{text}</p>
        </div>
        <div className="answer__footer">
          <ArrowUpwardOutlinedIcon fontSize="small" onClick={increaseVotes} />
          <section className="votes">{votes}</section>
          <ArrowDownwardOutlinedIcon fontSize="small" onClick={decreaseVotes} />
        </div>
      </div>
    );
  }
);

export default Answer;
