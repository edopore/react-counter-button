import React from "react";
import "../styles/Counter.css";

function Counter({ accumulator }) {
  return (
    <div className="accumulator">
      <p>{accumulator}</p>
    </div>
  );
}

export default Counter;
