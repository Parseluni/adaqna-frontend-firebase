import React, { forwardRef } from "react";
import "./Question.css";
import { Avatar } from "@material-ui/core";
import ArrowUpwardOutlinedIcon from '@material-ui/icons/ArrowUpwardOutlined';
import ArrowDownwardOutlinedIcon from '@material-ui/icons/ArrowDownwardOutlined';
import MessageOutlinedIcon from '@material-ui/icons/MessageOutlined';

const Question = forwardRef(({
    avatar, 
    username, 
    text, 
    timestamp, 
    votes
}, ref) => {
    const readableDate = (new Date(timestamp)).toDateString();

    return(
        <div className="question" ref={ref}>

            <div className="question__header">
                <div className="question__avatar">
                    <Avatar src={avatar} />
                </div>
                <div className="question__headerText">
                    <h3>
                        {username}
                    </h3>
                    <h5>
                        {readableDate}
                    </h5>
                </div>
                <div className="question__headerTimestamp">

                </div>
            </div>

            <div className="question__text">
                <h3>
                    {text}
                </h3>
            </div>
            <div className="question__footer">
                <ArrowUpwardOutlinedIcon fontSize="small" /> 
                <section className="votes">
                    {votes}
                </section>
                <ArrowDownwardOutlinedIcon fontSize="small" />
                <MessageOutlinedIcon fontSize="small" />
            </div>
        </div>
    )
})

export default Question;