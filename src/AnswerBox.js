import React, { useEffect, useState, useContext } from "react";
import "./AnswerBox.css";
import { Avatar, Button } from "@material-ui/core";
import db from "./firebase";
import UserContext from "./UserContext";
import Answer from "./Answer";


function AnswerBox(props) {
    const [answerText, setAnswerText] = useState("");
    const { user } = useContext(UserContext);

    useEffect(() => {
        db.collection("answerText").onSnapshot(snapshot => (
            setAnswerText(snapshot.docs.map(doc => doc.data()))
        ))
    }, []);

    const sendAnswer = event => {
        event.preventDefault();
        console.log(event)
        // check if answer has a value, if not, add error message
        // user context data population, query data.user
        try {
            db.collection("answers").add({
                // avatar: {Avatar}, 
                // how to fetch the question id from firebase?
                question_id: props.question_id,
                username: user.username,
                text: answerText,
                timestamp: Date.now(),  
                // votes: 7,
            });
        } catch (err) {
            console.log(err);
        }
        setAnswerText("");
    };

    return(
        <div className="answerBox">
            <form>
                <div className="answerBox__input">
                    <Avatar src="" />
                    <input 
                    onChange={event => setAnswerText(event.target.value)}
                    value={answerText} placeholder="What is your answer?" type="text" />
                </div>

                <Button 
                onClick={sendAnswer}
                type="submit"
                className="answerBox__button">Answer</Button>
            </form>   
        </div>
    )
}

export default AnswerBox;


// look into .doc to find the key and add the nested collection there

// separate answer collection, or nested under question?

// sort by date with reference type in all answers that is generated
// by the question when it was answered by the user
// reference questions/question_id