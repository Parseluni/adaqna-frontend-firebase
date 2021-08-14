import React, { useEffect, useState, useContext } from "react";
import "./QuestionBox.css";
import { Avatar, Button } from "@material-ui/core";
import db from "./firebase";
import UserContext from "./UserContext";


function QuestionBox() {
    const [questionText, setQuestionText] = useState("");
    const [showDropDown, setShowDropDown] = useState(false);
    const { user } = useContext(UserContext);

    useEffect(() => {
        db.collection("questionText").onSnapshot(snapshot => (
            setQuestionText(snapshot.docs.map(doc => doc.data()))
        ))
    }, []);

    const sendQuestion = event => {
        event.preventDefault();
        console.log(event)
        // check if question has a value, if not, add error message
        // check if input has a value, if not, add error message
        // user context data population, query data.user
        try {
            db.collection("questions").add({
                // avatar: {Avatar}, 
                username: user.username,
                text: questionText,
                timestamp: Date.now(),  
                topic: "topic",
                // votes: 7,
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
                    onFocus={event => setShowDropDown(true)}
                    value={questionText} placeholder="What is your question?" type="text" />
                </div>
                { showDropDown && (
                        <div>Topic: 
                            <select >
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
                        )
                    }

                <Button 
                onClick={sendQuestion}
                type="submit"
                className="questionBox__button">Ask</Button>
            </form>   
        </div>
    )
}

export default QuestionBox;