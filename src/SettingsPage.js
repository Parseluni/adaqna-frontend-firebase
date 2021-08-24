import React, { useState, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import db from "./firebase";
import { Button } from "@material-ui/core";
import UserContext from "./UserContext";
import "./LoginForm.css";
import Question from "./Question";

function SettingsPage() {
  const { user, login } = useContext(UserContext);

  const history = useHistory();
  const [username, setUsername] = useState(user.username);
  const [location, setLocation] = useState("");
  const [tag, setTag] = useState("");

  const saveFields = (event) => {
    console.log(user.uid);
    try {
      db.collection("users")
        .doc(user.uid)
        .update({
          username: username,
          tag: tag,
          location: location,
        })
        .then(() => login(user.uid));
      history.push("/");
    } catch (err) {
      console.log(err);
    }
    let updates = {};
    db.collection("questions")
      .where("uid", "==", user.uid)
      .get()
      .then((questions) => {
        questions.forEach((question) => {
          // db.collection("questions")
          //   .get()
          //   .then(function (querySnapshot) {
          //     querySnapshot.forEach(function (doc) {
          //       doc.ref.update({
          //         username: username,
          //       });
          //     });
          //   });

          question.ref.update({
            username: username,
          });
          console.log(question.data());
          // updates["/questions/" + question.id] = { username: username };
        });
      });
    // db.collection("questions").update(updates);
  };

  return (
    <div className="login">
      <Link to="/">
        <div id="login__logo">
          <img height="300" src="/logo.png" alt="Logo" />
        </div>
      </Link>

      {/* <div id="banner_image"></div> */}

      <div className="login__container">
        <form onSubmit={saveFields}>
          <h5>Edit username</h5>
          <input
            type="text"
            value={username}
            placeholder="username"
            onChange={(event) => setUsername(event.target.value)}
          />

          <h5>Set location</h5>
          <input
            type="text"
            onChange={(event) => setLocation(event.target.value)}
          />

          <h5>Select tag</h5>
          <select
            className="tag_dropdown"
            onChange={(event) => setTag(event.target.value)}
            value={tag}
          >
            <option value=""></option>
            <option value="Alumni">Alum</option>
            <option value="Applicant">Applicant</option>
            <option value="Intern">Intern</option>
            <option value="Instructor">Instructor</option>
            <option value="Interviewer">Interviewer</option>
            <option value="Other">Other</option>
            <option value="Staff">Staff</option>
            <option value="Student">Student</option>
            <option value="Volunteer">Volunteer</option>
          </select>

          <div>
            <Button
              variant="outlined"
              type="submit"
              className="submit__button"
              fullWidth
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
