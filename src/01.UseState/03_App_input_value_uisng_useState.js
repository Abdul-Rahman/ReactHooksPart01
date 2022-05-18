/* Copyright (C) AlphaPeeler */
//Setting the Value based on inputbox value change using useStates in react.
import React, {useState} from "react";
const StateTutorial = () => {
  const [inputValue, setInputValue] = useState("AlphaPeeler");  
  let onChange = (event) => {
    const newValue = event.target.value;
    setInputValue(newValue);
  };
  return (
    <div>
        <input placeholder="enter something..." onChange={onChange}/>
        {inputValue}
    </div>
  );
};
export default StateTutorial;
