import React, { useEffect, useRef, useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  let val = useRef(0);
  let btnRef = useRef();

  const incrementHandler = () => {
    // console.log({ val });
    // console.log("btn clicked");
    val.current = val.current + 1;
    console.log("valueIsUpdated", val.current);
    setCount(count + 1);
  };

  const changeColorHandler = () => {
    btnRef.current.style.background = "red";
  };

  useEffect(() => {
    console.log("I am rendering always");
  });
  return (
    <div className="box">
      <div>{count}</div>

      <div onClick={incrementHandler} className="btn" ref={btnRef}>
        increment
      </div>

      <div
        style={{
          padding: "20px 40px",
          background: "white",
          borderRadius: "15px",
        }}
        onClick={changeColorHandler}
      >
        change color of button
      </div>
    </div>
  );
};

export default App;
