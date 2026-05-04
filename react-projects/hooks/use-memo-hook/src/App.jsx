import React, { useEffect, useMemo, useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState(0);

  const incrementHandler = () => {
    setCount(count + 1);
  };

  function expensiveFunction(n) {
    console.log("Inside expensive function");

    // for (let i = 0; i <= 10000000000; i++) {}

    return n * 2;
  }

  const doubleValue = useMemo(() => expensiveFunction(input), [input]);

  const handleInputChange = (e) => {
    setInput(Number(e.target.value));
  };

  useEffect(() => {
    console.log("I am rendering always");
  }, []);

  return (
    <div className="box">
      <div>{count}</div>

      <input
        type="number"
        value={input}
        style={{ padding: "12px", fontSize: "15px" }}
        onChange={handleInputChange}
      />

      <div> Double: {doubleValue}</div>

      <div onClick={incrementHandler} className="btn">
        increment
      </div>
    </div>
  );
};

export default App;
