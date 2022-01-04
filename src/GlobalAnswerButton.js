import React from "react";
import "./GlobalAnswerButton.css";
import { Link } from "react-router-dom";


// Pass component as a prop (the icon itself)
export function AnswerBoxOpener({text, Icon, onClick}) {
    return (
    <div onClick={onClick} className="globalAnswerButton">
        <Icon />
        <h2>{text}</h2>
    </div>
    )
}

function GlobalAnswerButton({active, text, link, Icon}) {
    return (
    <Link className={`globalAnswerButton ${active && 'globalAnswerButton--active'}`}
          to={link}>
        <Icon />
        <h2>{text}</h2>
    </Link>
    )
}

export default GlobalAnswerButton;
