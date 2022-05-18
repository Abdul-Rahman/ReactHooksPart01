/* Copyright (C) AlphaPeeler */
/* commenting out the functionality of changing the current value of input to Hello, results in showing the value AlphaPeeler which was set by useLayoutEffect before page rendering starts on browser. */
import { useLayoutEffect, useEffect, useRef } from "react";
function LayoutEffectTutorial() {
  const inputRef = useRef(null);
  useLayoutEffect(() => {
    console.log(inputRef.current.value);
  }, []);
  useEffect(() => {
    //inputRef.current.value = "HELLO";
  }, []);
  return (
    <div className="App">
      <input ref={inputRef} value="AlphaPeeler" style={{ width: 400, height: 60 }} />
    </div>
  );
}
export default LayoutEffectTutorial;