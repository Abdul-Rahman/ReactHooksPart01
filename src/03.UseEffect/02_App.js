/* Copyright (C) AlphaPeeler */
/*using useEffect for handling api calls using axios*/
import React, { useEffect } from "react";
import axios from "axios";
function EffectTutorial() {
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((response) => {
        console.log(response.data);
      });
  });
  return <div>Hello World 2</div>
}
export default EffectTutorial;
