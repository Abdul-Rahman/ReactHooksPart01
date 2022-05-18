/* Copyright (C) AlphaPeeler */
//Increment code that increments counter value but does not remder it properly due to not  using useStates in react.
import React from "react";
const StateTutorial = () => {
    let counter = 0;
  const increment = () => {
    counter = counter + 1;
    console.log(counter);
  };
  return (
    <div>
        {counter}
        <button onClick={increment}>increment</button>
    </div>
  );
};
export default StateTutorial;
