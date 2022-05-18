/* Copyright (C) AlphaPeeler */
/* Case A- Calling useEffect only once (hence API is loaded once initially), even though counter value changes several times, this is done by passing an empty array [] to useEffect
Case B- Calling useEffect every time, when counter value changes; (hence API is also loaded every time) this is done by passing an [counter] to useEffect. */
import React, { useEffect, useState } from "react";
import axios from "axios";

function EffectTutorial() {
  const [data, setData] = useState("");
  const [count, setCount] = useState(0);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((response) => {
        setData(response.data[0].email);
        console.log("API WAS CALLED");
      });
  }, []);
  //}, [count]);

  return (
    <div>
      Hello World
      <h1>{data}</h1>
      <h1>{count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Click
      </button>
    </div>
  );
}

export default EffectTutorial;
