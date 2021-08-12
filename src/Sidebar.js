import React, { useContext } from "react";
import "./Sidebar.css";
import SidebarOption from "./SidebarOption";
import HomeIcon from "@material-ui/icons/Home";
import LinkOutlinedIcon from '@material-ui/icons/LinkOutlined';
import SettingsIcon from "@material-ui/icons/Settings";
import PersonIcon from "@material-ui/icons/Person";
import UserContext from "./UserContext";


function Sidebar() {

    const { user } = useContext(UserContext);

    return (
        <div className="sidebar">

            <SidebarOption active Icon={HomeIcon} text="Home"/>
            <SidebarOption Icon={SettingsIcon} text="Settings"/>
            <SidebarOption Icon={LinkOutlinedIcon} text="Links"/>
            {user.auth ? <SidebarOption Icon={PersonIcon} text="Profile"/> : ""}

        </div>
    )
}

export default Sidebar;
