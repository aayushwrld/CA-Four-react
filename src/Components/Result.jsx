// importing necessary components
import React, { useContext } from "react";
import "../../src/App.css";
import { AppContext } from "./ParentContext";

// defining result function to export
const Result = () => {

  // calling all elements from parent context
  const { isDark, score, setScore, setHandleClick} = useContext(AppContext);

  // scoreText for showing, text according to the score which has come
  const scoreText = () => {
    if (score <= 3) {
      return "You could have done better!";
    } else if (score <= 7) {
      return "Good, but you need to revise!";
    } else if ((score) => 9) {
      return "Excellent";
    }
  };

  // returning for render
  return (
    <div className="resultParent">
      <div className="result-modal"

        // style for dark and light modes of the website
        style={{
          background: `${
            isDark ? "rgba(108, 123, 137, 0.682)" : "rgba(35, 42, 49, 0.682)"
          }`,
          color: `${isDark ? "rgb(221, 221, 221)" : "rgb(34, 40, 47)"}`,
        }}
      >

        {/* result modal, for the results */}
        <div className="result-modal-1">
          <h1 className="result-header">Results</h1>
          <img src="" alt="" />
        </div>
        <div className="result-modal-2">
          <div className="results">
            <h3 className="results-1">Correct Answers</h3>

            {/* {score} for displaying the score  */}
            <h3 className="results-2">{score}</h3>
          </div>
          <hr style={{border: `2px solid ${ isDark ? "rgb(221, 221, 221)" : "rgb(34, 40, 47)" }`, }}/>
          <div className="results">
            <h3 className="results-1">Wrong Answers</h3>
            <h3 className="results-2">{10 - score}</h3>
          </div>
        </div>
        <div className="result-modal-3">
          <h3 className="final-result-1">{scoreText()}</h3>
          <h3 className="final-result-2">Your score was {score}/10 - ({(score/10)*100}%)</h3>
        </div>

        {/* restart button, for playing again */}
        <button className="restart-btn"
          onClick={() => {setHandleClick("home"); setScore(0); }}>
        Restart
        </button>
      </div>
    </div>
  );
};

// exporting result
export default Result;