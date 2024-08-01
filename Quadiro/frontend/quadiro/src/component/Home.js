import React from "react";
import AddDetail from "./AddDetail";
import DisplayDetail from "./CarList";
import '../styles/Home.css'

function Home() {
  return (
    <div>
      <div className="header">
        <h1>Assignmnet for Quadiro Technologies</h1>
      </div>
      <div className="main">
        <div className="left">
          <AddDetail></AddDetail>
        </div>
        <div className="right">
          <DisplayDetail></DisplayDetail>
        </div>
      </div>
    </div>
  );
}

export default Home;
