import React, { useEffect, useState, useContext } from "react";
import "./QuestionBox.css";
import { Avatar, Button } from "@material-ui/core";
import db from "./firebase";
import UserContext from "./UserContext";


function QuestionBox() {
    const [questionText, setQuestionText] = useState("");
    const { user } = useContext(UserContext);

    useEffect(() => {
        db.collection("questionText").onSnapshot(snapshot => (
            setQuestionText(snapshot.docs.map(doc => doc.data()))
        ))
    }, []);

    const sendQuestion = event => {
        event.preventDefault();
        console.log(event)
        // user context data population, query data.user
        try {
            db.collection("questions").add({
                // avatar: {Avatar}, 
                username: user.username,
                text: questionText,
                timestamp: Date.now(),  
                votes: 7,
            });
        } catch (err) {
            console.log(err);
        }
        setQuestionText("");
    };

    return(
        <div className="questionBox">
            <form>
                <div className="questionBox__input">
                    <Avatar src="" />
                    <input 
                    onChange={event => setQuestionText(event.target.value)}
                    value={questionText} placeholder="What is your question?" type="text" />
                </div>
                <Button 
                onClick={sendQuestion}
                type="submit"
                className="questionBox__button">Ask</Button>
            </form>   
        </div>
    )
}

export default QuestionBox;