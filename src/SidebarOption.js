import React from "react";
import "./SidebarOption.css";

// On Hover turn blue
// Pass component as a prop (the icon itself)

function SidebarOption({active, text, Icon}) {
    return (
    <div className={`sidebarOption ${active && 'sidebarOption--active'}`}>
        <Icon />
        <h2>{text}</h2>
    </div>
    )
}

export default SidebarOption;