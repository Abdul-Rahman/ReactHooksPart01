/* Copyright (C) AlphaPeeler */
/*useLayoutEffect is fundamentally called in an earlier stage of page rendering than the useEffect(). 
useLayoutEffect is called before anything  is printed to the user. 
So you might use the useLayoutEffect in cases where you want to change the layout of your application before it actually prints out to the user.
*/
import { useLayoutEffect, useEffect } from "react";
function LayoutEffectTutorial() {
  useEffect(() => {
    console.log("UseEffect");
  }, []);
  useLayoutEffect(() => {
    console.log("UseLayoutEffect");
  }, []);
  return <div>AlphaPeeler</div>
}
export default LayoutEffectTutorial;