/* Copyright (C) AlphaPeeler */
//Increment code that works using useStates in react.
import React, {useState} from "react";
const StateTutorial = () => {
  const [counter, setCounter] = useState(0);  
  const increment = () => {
    setCounter(counter + 1);
  };
  return (
    <div>
        {counter}
        <button onClick={increment}>increment</button>
    </div>
  );
};
export default StateTutorial;
