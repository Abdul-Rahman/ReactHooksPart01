/* Copyright (C) AlphaPeeler */
/*
Note: every time we change the code for example we change value in  <div>Hello World</div> and save Ctrl+s then Alphapeeler is logged in console. It means every time state is changed the function we pass in useEffect will be called.  useEffect( ()=> {});  // highlighted function will be called. 
*/
import React, { useEffect } from "react";
function EffectTutorial() {
  useEffect( ()=> {
    console.log("AlphaPeeler");
  });
  return <div>Hello World 2</div>
}
export default EffectTutorial;
