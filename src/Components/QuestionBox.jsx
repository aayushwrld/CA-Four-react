// importing the necessary components
import React, { useContext, useState } from "react";
import { AppContext } from "./ParentContext";
import "../App.css";
import questionsData from "../questions.js";

// quiz function for exporting
const Quiz = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [isHighlight, setIsHighlight] = useState(false);
  const { isDark } = useContext(AppContext);
  const { setHandleClick, setScore, score } = useContext(AppContext);

  const currentQuestion = questionsData[currentQuestionIndex];

  // toggleHighlight function for highlighting the question on button click
  const toggleHighlight = () => {
    setIsHighlight((prevState) => !prevState)
  };

  // handleOptionClick function, for going to next question after clicking on an option
  const handleOptionClick = (e) => {
    if (currentQuestionIndex < questionsData.length - 1){
      setCurrentQuestionIndex(currentQuestionIndex + 1)
    }else if (currentQuestionIndex == questionsData.length - 1){
      setHandleClick("result");
    }

    // if the option selected is correct, update score
    if (e){
      setScore(score + 1)
    }
  };

  // code that will return after rendering
  return (

    <div className="quizParent">

      {/* // creating a quiz modal */}
      <div className="quiz-modal">
        <div className="quiz-modal-1">
          <h1
            className="modal-header"
            style={{
              color: `${isDark ? "rgb(221, 221, 221)" : "rgb(34, 40, 47)"}`,
            }}
          >
            Question {currentQuestionIndex + 1} out of {questionsData.length}
          </h1>
          
          {/* when the highlight option is clicked, the question will highlight */}
          <h1
            className={`modal-question ${isHighlight ? "highlighted" : ""}`}
            id={isHighlight ? "highlight" : ""}
            style={{
              color: `${isDark ? "rgb(221, 221, 221)" : "rgb(34, 40, 47)"}`,
              WebkitTextStroke: `${isHighlight && isDark ? "0.1px red" : ""}`
            }}
          >
            {currentQuestion.text}
          </h1>
        </div>
        <div
          className="quiz-modal-2"
          style={{
            color: `${isDark ? "rgb(221, 221, 221)" : "rgb(34, 40, 47)"}`,
          }}
        >
          {/* mapping the list of questions given so that they are visible accoridingly */}
          {currentQuestion.options.map((option) => (
            <div
              key={option.id}
              className="options"
              onClick={()=>{
                handleOptionClick(option.isCorrect)
              }}
            >
              {option.text}
            </div>
          ))}
        </div>

        {/* the highlight button is present here */}
        <div className="quiz-modal-3">
          <button
            className="highlight-btn highlights"
            onClick={toggleHighlight}
          >
            {isHighlight ? "Unhighlight" : "Highlight"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Quiz;