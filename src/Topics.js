import React from "react";
import SearchIcon from '@material-ui/icons/Search';
import TopicFilter from "./TopicFilter";
import "./Topics.css";

function Topics() {

    // const renderList = [];

    // for (const topic in topics) {
    //     renderList.push(< TopicFilter id={topic.id} displayLabel={topic.name} />)
    // }

    return(
        <div>
            {/* Header */}
            <div className="topics">
                <div className="topics__title">
                    <h2>Topics</h2>
                </div>

                {/* Topics */}
                <div className="topics__choices">
                    {/* {renderList} */}
                    <h3>Essays</h3>
                    <h3>Code Challenge</h3>
                    <h3>Technical Interview</h3>
                    <h3>Final Interview</h3>
                    <h3>Application Timeline</h3>
                    <h3>Internships</h3>
                    <h3>Career Prospects</h3>
                    <h3>General</h3>
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