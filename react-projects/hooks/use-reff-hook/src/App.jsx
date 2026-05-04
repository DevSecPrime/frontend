import React, { useEffect, useRef, useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  let val = useRef(0);
  const incrementHandler = () => {
    // console.log({ val });
    // console.log("btn clicked");
    val.current = val.current + 1;
    console.log("valueIsUpdated", val.current);
    setCount(count + 1);
  };
  useEffect(() => {
    console.log("I am rendering always");
  });
  return (
    <div className="box">
      <div>{count}</div>

      <div onClick={incrementHandler} className="btn">
        increment
      </div>
    </div>
  );
};

export default App;
