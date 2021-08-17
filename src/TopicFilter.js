import React from "react";
import "./TopicFilter.css";
import { Link } from "react-router-dom";

function TopicFilter({text, active, handleTopicFilter}) {

    const onClick = (event) => {
        handleTopicFilter(text)
    }

    return (
        <Link onClick={onClick} className={`topicFilter ${active && 'topicFilter--active'}`}>
            <h3>{text}</h3>
        </Link>
    )
}

export default TopicFilter;





