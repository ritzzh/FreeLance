import React, { useState } from "react";
import "../styles/Counter.css";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [errstat, setErrStat] = useState("");
  const [history, setHistory] = useState([0]);
  const [index, setIndex] = useState(0);

  const updateHistory = (localCount) => {
    const newHistory = [...history.slice(0, index + 1), localCount];
    setHistory(newHistory);
    setIndex(newHistory.length - 1);
    setCount(localCount);
  };

  const handleIncrement = () => {
    let localCount = count;
    if (localCount < 150) {
      if (errstat !== "") setErrStat("");
      localCount += 1;
      updateHistory(localCount);
    } else {
      setErrStat("Maximum Number Limit Reached");
    }
  };
  const handleDecrement = () => {
    let localCount = count;
    if (localCount > 0) {
      if (errstat !== "") setErrStat("");
      localCount -= 1;
      updateHistory(localCount);
      setErrStat("");
    } else {
      setErrStat("Minimum Number Limit Reached");
    }
  };
  const undo = () => {
    if (index > 0) {
      setIndex(index - 1);
      setCount(history[index - 1]);
    }
  };
  const redo = () => {
    if (index < history.length - 1) {
      setIndex(index + 1);
      setCount(history[index + 1]);
    }
  };

  return (
    <div className="counter-outer">
      <div className="counter-progress">
        <div
          className="progress-bar"
          style={{ width: `${(count / 150) * 100}%` }}
        />
      </div>
      <div className="counter-disp">
        <h1 key={count}>{count}</h1>
      </div>
      <div className="counter-err">
        <div className="h3">{errstat}</div>
      </div>
      <div className="counter-btn-grp">
        <div className="counter-btn">
          <button onClick={handleIncrement}>Increment</button>
        </div>
        <div className="counter-btn">
          <button onClick={handleDecrement}>Decrement</button>
        </div>
        <div className="counter-btn">
          <button onClick={undo}>Undo</button>
        </div>
        <div className="counter-btn">
          <button onClick={redo}>Redo</button>
        </div>
      </div>
    </div>
  );
};
export default Counter;
