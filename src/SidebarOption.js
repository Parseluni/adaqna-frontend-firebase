import React from "react";
import "./SidebarOption.css";
import { Link } from "react-router-dom";

// Pass component as a prop (the icon itself)

export function AnswerBoxOpener({text, onClick}) {
    return (
    <div onClick={onClick} className="sidebarOption">
        <h2>{text}</h2>
    </div>
    )
}

function SidebarOption({active, text, link, Icon}) {
    return (
    <Link className={`sidebarOption ${active && 'sidebarOption--active'}`}
          to={link}>
        <Icon />
        <h2>{text}</h2>
    </Link>
    )
}

export default SidebarOption;