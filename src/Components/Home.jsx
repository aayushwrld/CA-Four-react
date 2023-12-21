// importing the necessary components
import React, { useContext } from "react";
import "../App.css";
import { AppContext } from "./ParentContext";

// home function for rendering
const Home = () => {
  const { isDark } = useContext(AppContext);
  const { setHandleClick } = useContext(AppContext);

// returning for rendering
  return (
    <>
      <div className="homeParent" onClick={()=>{
        setHandleClick("quiz")
      }}>

        {/* heading of the website */}
        <h1 style={{
            textShadow: `${isDark ? "0px 0px 5px #414F5D" : "0px 0px 5px #6E88A1"}`, color: `${isDark ? "rgb(221, 221, 221)" : "rgb(45, 54, 63)"}`}}>
          Brainzy
        </h1>
        
        {/* text stating to start playing, after clicking anywhere */}
        <h2 style={{
            textShadow: `${isDark ? "0px 0px 2px #414F5D" : "0px 0px 5px #6E88A1"}`,color: `${isDark ? "rgb(221, 221, 221)" : "rgb(45, 54, 63)"}`,}} className="click-start">
          Click anywhere to start!
        </h2>
      </div>
    </>
  );
};

export default Home;