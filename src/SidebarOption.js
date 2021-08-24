import React from "react";
import "./SidebarOption.css";
import { Link, useLocation } from "react-router-dom";


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