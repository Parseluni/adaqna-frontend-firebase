import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
// import Link from "react-router-dom";

function LinksPage() {
  return (
    <div>
      <Header />
      <div className="app">
        <Sidebar />

        <nav>
          <a href="https://firebase.google.com/docs/firestore/query-data/queries">
            Text
          </a>
          <a href="https://firebase.google.com/docs/firestore/query-data/queries">
            TextTwo
          </a>
          {/* <Link to="https://firebase.google.com/docs/firestore/query-data/queries"/> */}
          {/* <Link to="https://firebase.google.com/docs/firestore/query-data/queries"/> */}
        </nav>
      </div>
    </div>
  );
}

export default LinksPage;
