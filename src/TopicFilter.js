import React from "react";
import "./TopicFilter.css";

function TopicFilter({text, active}) {

    return (
        <div className={`topicFilter ${active && 'topicFilter--active'}`}>
        <h3>{text}</h3>
    </div>
    )
}

export default TopicFilter;






