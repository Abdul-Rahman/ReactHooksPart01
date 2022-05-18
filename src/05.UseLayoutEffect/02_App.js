/* Copyright (C) AlphaPeeler */
/* initial value of input was AlphaPeeler which was  set via useLayoutEffect. This can be seen in the console log as well, but this value later on get changed to HELLO via useEffect after the page rendering is completed */
import { useLayoutEffect, useEffect, useRef } from "react";
function LayoutEffectTutorial() {
  const inputRef = useRef(null);
  useLayoutEffect(() => {
    console.log(inputRef.current.value);
  }, []);
  useEffect(() => {
    inputRef.current.value = "HELLO";
  }, []);
  return (
    <div className="App">
      <input ref={inputRef} value="AlphaPeeler" style={{ width: 400, height: 60 }} />
    </div>
  );
}

export default LayoutEffectTutorial;