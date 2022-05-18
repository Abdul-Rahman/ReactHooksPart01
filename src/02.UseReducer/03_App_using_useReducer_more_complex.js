/* Copyright (C) AlphaPeeler */
/*
We use useReducer hook when we have many different states being altering with the same action. 
An alternative to useState. useReducer is usually preferable to useState when you have complex state logic that involves multiple sub-values or when the next state depends on the previous one. 
*/
import React, { useReducer } from "react";
const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1, showText: state.showText };
    case "toggleShowText":
      return { count: state.count, showText: !state.showText };
    case "DECREMENTby3":
        return { count: state.count - 3, showText: state.showText };
    case "MULTIPLYby2":
          return { count: state.count * 2, showText: state.showText };
    default:
      return state;
  }
};
const ReducerTutorial = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0, showText: true });
  return (
    <div>
      <h1>{state.count}</h1>
      <button
        onClick={() => {
          dispatch({ type: "INCREMENT" });
          dispatch({ type: "toggleShowText" });
          dispatch({ type: "DECREMENTby3" });
          dispatch({ type: "MULTIPLYby2" });
        }}
      >
        Click Here
      </button>

      {state.showText && <p>This is a text</p>}
    </div>
  );
};
export default ReducerTutorial;