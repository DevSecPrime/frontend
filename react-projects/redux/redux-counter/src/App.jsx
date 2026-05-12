import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  reset,
  incrementByAmount,
} from "./redux/features/counter/counterSlice";
import { useState } from "react";

const App = () => {
  const count = useSelector((state) => state.counterReducer.value);
  const dispatch = useDispatch();

  const [num, setNum] = useState(0);

  const incrementHandler = () => {
    dispatch(increment());
  };

  const decrementHandler = () => {
    dispatch(decrement());
  };

  const resetCountHandler = () => {
    dispatch(reset());
  };
  // ===========================================================
  const incrementByAmountHandler = () => {
    dispatch(incrementByAmount(+num));
  };

  return (
    <div>
      <input
        type="number"
        value={num}
        onChange={(e) => setNum(e.target.value)}
      ></input>
      <div>
        <button
          onClick={() => {
            incrementHandler();
          }}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          onClick={() => {
            decrementHandler();
          }}
        >
          {" "}
          Decrement
        </button>
      </div>

      <button onClick={() => resetCountHandler()}>Reset count</button>
      <button onClick={() => incrementByAmountHandler()}>
        increment by amount
      </button>
    </div>
  );
};

export default App;
