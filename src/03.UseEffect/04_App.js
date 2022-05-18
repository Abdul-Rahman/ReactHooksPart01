/* Copyright (C) AlphaPeeler */
/* calling useEffect only once by passing empty array in the end*/
import React, { useEffect, useState } from "react";
import axios from "axios";
function EffectTutorial() {
  const [data, setData] = useState("");
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((response) => {
        setData(response.data[0].email);
        console.log("API WAS CALLED");
      }); 
  }, []);
  return <div>Hello World : {data} </div>
}
export default EffectTutorial;