// the parent context of the whole website
import React, { createContext, useState } from "react";

// exporting the context
export const AppContext = createContext();

const ParentContext = ({ children }) => {

  // defining variables for context
  const [isDark, setIsDark] = useState(true);
  const [handleClick, setHandleClick] = useState("home");
  const [score, setScore] = useState(0);
  const [logo, setLogo] = useState(true);

  return (

    // passing values required throughtout the file
    <AppContext.Provider value={{ isDark, setIsDark, handleClick, setHandleClick, score, setScore, logo, setLogo }}>
      {children}
    </AppContext.Provider>
  );
};

export default ParentContext;