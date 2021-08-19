import React, { useContext } from "react";
import "./Sidebar.css";
import SidebarOption from "./SidebarOption";
import HomeIcon from "@material-ui/icons/Home";
import LinkOutlinedIcon from "@material-ui/icons/LinkOutlined";
import SettingsIcon from "@material-ui/icons/Settings";
import PersonIcon from "@material-ui/icons/Person";
import UserContext from "./UserContext";

function Sidebar(props) {
  const { user } = useContext(UserContext);

  return (
    <div className="sidebar">
      <SidebarOption
        active
        Icon={HomeIcon}
        text="Home"
        link={{ pathname: "/", state: { currentFilter: null }}}
      />
      <SidebarOption Icon={LinkOutlinedIcon} text="Links" link={{pathname: "/links"}} />
      {/* <SidebarOption Icon={SettingsIcon} text="Settings" link={{pathname: "/settings"}} /> */}
      {user.auth ? (
        <SidebarOption Icon={SettingsIcon} text="Settings" link={{pathname: "/settings"}} />
      ) : (
        ""
      )}

      {user.auth ? (
        <SidebarOption
          Icon={PersonIcon}
          text="Profile"
          link={{pathname: "/profile"}}
          handleTopicFilter={props.handleTopicFilter}
          currentFilter={props.currentFilter} 
        />
      ) : (
        ""
      )}
    </div>
  );
}

export default Sidebar;
