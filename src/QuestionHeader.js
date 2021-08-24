import React from "react";
import Question from "./Question";
import { Avatar } from "@material-ui/core";
import db from "./firebase";
import FlipMove from "react-flip-move";
import "./QuestionHeader.css";

function QuestionHeader({ currentFilter }) {

//   const [questions, setQuestions] = useState([]);

//   useEffect(() => {
//     db.collection("questions").orderBy("timestamp", "desc").onSnapshot((snapshot) =>
//       setQuestions(
//         snapshot.docs.map((doc) => {
//           return { id: doc.id, ...doc.data() };
//         })
//       )
//     );
//   }, []);

  
  return (
    <div>


    </div>
  );
}

export default QuestionHeader;


