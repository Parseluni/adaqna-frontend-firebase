import React from "react";
import SearchIcon from '@material-ui/icons/Search';
import TopicFilter from "./TopicFilter";
import "./Topics.css";


function Topics() {

    const renderList = [];

    const topics = [
        { name: "Essays", id: "essays"},
        { name: "Code Challenge", id: "codeChallenge"},
        { name: "Technical Interview", id: "technicalInterview"},
        { name: "Final Interview", id: "finalInterview"},
        { name: "Application Timeline", id: "applicationTimeline"},
        { name: "Internships", id: "internships"},
        { name: "Career Prospects", id: "careerProspects"},
        { name: "General", id: "general"}
    ]

    for (const topic of topics) {
        renderList.push(<TopicFilter id={topic.id} text={topic.name} />)
    }

    return(
        <div>
            {/* Header */}
            <div className="topics">
                <div className="topics__title">
                    <h2>Topics</h2>
                </div>

                {/* Topics */}
                <div className="topics__choices">
                    {renderList}

                    {/* <TopicFilter text="Essays" />             
                    <TopicFilter text="Code Challenge" /> 
                    <TopicFilter text="Technical Interview" /> 
                    <TopicFilter text="Final Interview" />            
                    <TopicFilter text="Application Timeline" />             
                    <TopicFilter text="Internships" />             
                    <TopicFilter text="Career Prospects" />             
                    <TopicFilter text="General" />              */}
                </div>

                {/* Search --> ONLY IF TIME!!! */}
                <div className="topics__input">
                    <SearchIcon className="topics__searchIcon" />
                    <input placeholder="Search for keywords" type="text" />
                </div>

            </div>
        </div>
    )
}

export default Topics;





{/* <div className="topics__choices">
<h3>Essays</h3>               
<h3>Code Challenge</h3>
<h3>Technical Interview</h3>
<h3>Final Interview</h3>
<h3>Application Timeline</h3>
<h3>Internships</h3>
<h3>Career Prospects</h3>
<h3>General</h3>
</div> */}