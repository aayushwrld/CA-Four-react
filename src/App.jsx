// importing necessary compoents which are required
import React, { useContext } from "react";
import "./App.css";
import Home from "./Components/Home";
import { AppContext } from "./Components/ParentContext";
import lightmode from "./assets/light-mode.png";
import nightmode from "./assets/night-mode.png";
import Quiz from "./Components/QuestionBox";
import Result from "./Components/Result";

// app function for rendering
function App() {
  const { isDark, setIsDark } = useContext(AppContext);
  const { handleClick } = useContext(AppContext);
  const { logo, setLogo } = useContext(AppContext);

  // renderPage function for changing context according to the required context
  const renderPage = () => {
    switch (handleClick) {
      case "home":
        return <Home /> 
      case "quiz":
        return (
          <>
            {/* Only render the h1 tag when handleClick is "quiz" */}
            <h1 className="top-logo"
              style={{
                textShadow: `${
                  isDark ? "0px 0px 5px #414F5D" : "0px 0px 5px #6E88A1"
                }`,
                color: `${
                  isDark ? "rgb(221, 221, 221)" : "rgb(45, 54, 63)"
                }`,
              }}
            >
              Brainzy
            </h1>
            <Quiz />
          </>
        ); 
      case "result":
        return (
          <>
            {/* Only render the h1 tag when handleClick is "result" */}
            <h1 className="top-logo"
              style={{
                textShadow: `${
                  isDark ? "0px 0px 5px #414F5D" : "0px 0px 5px #6E88A1"
                }`,
                color: `${
                  isDark ? "rgb(221, 221, 221)" : "rgb(45, 54, 63)"
                }`,
              }}
            >
              Brainzy
            </h1>
            <Result />
          </>
        );
    }
  }

  // returning for rendering
  return (
    <div className="appParent">
      <div
        className="inverted-bg"
        style={{
          filter: `invert(${isDark ? 1 : 0})`,
        }}
      ></div>

      {/* glass morphism for background blur */}
      <div
        className="morphism"
        style={{
          background: `${
            isDark ? "rgba(255, 255, 255, 0.25)" : "rgba(0, 0, 0, 0.25)"
          })`,
        }}
      >
        <div className="navbar">

          {/* heading of the website + color changing according to the theme */}
          
          {/* theme buttons (the moon and sun button) */}
          <img
            src={isDark ? nightmode : lightmode}
            alt=""
            id="theme-btn"
            onClick={() => {
              setIsDark(!isDark);
            }}

            // changing shadow according to the theme
            style={{
              filter: isDark
                ? "drop-shadow(1px 1px 10px white)"
                : "drop-shadow(0px 0px 3px black)",
            }}
          />
        </div>

        {/* renderpage for rendering appropiate component */}
        {renderPage()}
      </div>
    </div>
  );
}

export default App;
