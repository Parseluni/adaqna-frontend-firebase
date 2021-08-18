import React from "react";
import SearchIcon from '@material-ui/icons/Search';
import TopicFilter from "./TopicFilter";
import "./Topics.css";


function Topics({handleTopicFilter}) {

    const renderList = [];

    const topics = [
        { topic: "Essays", id: "essays"},
        { topic: "Code Challenge", id: "codeChallenge"},
        { topic: "Technical Interview", id: "technicalInterview"},
        { topic: "Final Interview", id: "finalInterview"},
        { topic: "Application Timeline", id: "applicationTimeline"},
        { topic: "Internships", id: "internships"},
        { topic: "Career Prospects", id: "careerProspects"},
        { topic: "General", id: "general"}
    ]

    for (const topic of topics) {
        renderList.push(<TopicFilter handleTopicFilter={handleTopicFilter} id={topic.id} text={topic.topic} />)
    }

    return(
        <div className="topics__container">
            {/* Header */}
            <div className="topics">
                <div className="topics__title">
                    <h2 style={{ color: 'var(--ada-pink)' }}>Topics</h2>
                </div>

                {/* Topics */}
                <div className="topics__choices">
                    {renderList}
                </div>

                {/* Search */}
                <div className="topics__input">
                    <SearchIcon className="topics__searchIcon" />
                    <input placeholder="Search for keywords" type="text" />
                </div>

            </div>
        </div>
    )
}

export default Topics;


