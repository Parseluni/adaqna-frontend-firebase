import React from "react";
import "./SidebarOption.css";
import { Link, useLocation } from "react-router-dom";
import { ControlCameraOutlined } from "@material-ui/icons";

// Pass component as a prop (the icon itself)

// export function AnswerBoxOpener({text, onClick}) {
//     return (
//     <div onClick={onClick} className="sidebarOption">
//         <h2>{text}</h2>
//     </div>
//     )
// }

// function refreshPage(){ 
//     window.location.reload(); 
// }

function SidebarOption({active, text, link, Icon}) {
    let location = useLocation();

    active = location.pathname === link.pathname;
    console.log(location.pathname, link.pathname);

    return (
    <Link className={`sidebarOption ${active && 'sidebarOption--active'}`}
          to={link}>
        <Icon />
        <h2>{text}</h2>
    </Link>
    )
}

export default SidebarOption;