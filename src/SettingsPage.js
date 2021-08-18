import React, { useState, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import db from "./firebase";
import { Button } from "@material-ui/core";
import UserContext from "./UserContext";
import "./LoginForm.css";

function SettingsPage() {
  const { user } = useContext(UserContext);
  const history = useHistory();
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [tag, setTag] = useState("");

  const handleTagSelection = (event) => {
    setTag(event.target.value);
  };

  const saveFields = (event) => {
    db.collection("users").doc(user.username).set({
      username: username,
      tag: tag,
      location: location,
    });
    //   .then(history.push("/"));
  };

  return (
    <div className="login">
      <Link to="/">
        <div id="login__logo">
          <img height="300" src="/logo.png" alt="Logo" />
        </div>
      </Link>

      <div id="banner_image"></div>

      <div className="login__container">
        <form>
          <h5>Edit username</h5>
          <input
            type="text"
            // value={user.username}
            placeholder={user.username}
            onChange={(event) => setUsername(event.target.value)}
          />

          <h5>Set location</h5>
          <input
            type="password"
            value={user.password}
            placeholder={user.password}
            onChange={(event) => setLocation(event.target.value)}
          />

          <h5>Select tag</h5>
          <select
            className="topic_dropdown"
            onChange={(event) => setTag(event.target.value)}
            value={tag}
          >
            <option value=""></option>
            <option value="Essays">Essays</option>
            <option value="Code Challenge">Code Challenge</option>
            <option value="Technical Interview">Technical Interview</option>
            <option value="Final Interview">Final Interview</option>
            <option value="Application Timeline">Application Timeline</option>
            <option value="Internships">Internships</option>
            <option value="Career Prospects">Career Prospects</option>
            <option value="General">General</option>
          </select>
          <input
            type="text"
            value={user.email}
            placeholder={user.email}
            onChange={(event) => setTag(event.target.value)}
          />

          <div>
            <Button
              variant="outlined"
              type="submit"
              className="submit__button"
              fullWidth
              onClick={saveFields()}
            >
              Save
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SettingsPage;
