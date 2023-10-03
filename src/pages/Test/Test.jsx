import React, { useRef, useState } from "react";

function Test(props) {
  const [count, setCount] = useState(0);
  const elementRef = useRef(null);
  elementRef.current;

  console.log("ELEMENT REF -> ", elementRef.current);
  return (
    <div ref={elementRef} onClick={() => setCount((prev) => prev + 1)}>
      asd asdad asd asd asd sd
    </div>
  );
}

export default Test;
