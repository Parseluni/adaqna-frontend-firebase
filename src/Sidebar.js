import React from "react";
import "./Sidebar.css";
import SidebarOption from "./SidebarOption";
import HomeIcon from "@material-ui/icons/Home";
import LinkOutlinedIcon from '@material-ui/icons/LinkOutlined';import SettingsIcon from "@material-ui/icons/Settings";
import PersonIcon from "@material-ui/icons/Person";

function Sidebar() {
    return (
        <div className="sidebar">

            <SidebarOption active Icon={HomeIcon} text="Home"/>
            <SidebarOption Icon={SettingsIcon} text="Settings"/>
            <SidebarOption Icon={LinkOutlinedIcon} text="Links"/>
            <SidebarOption Icon={PersonIcon} text="Profile"/>

        </div>
    )
}

export default Sidebar;
