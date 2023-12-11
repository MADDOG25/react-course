import { useState } from "react";
import "../App.css";

function Counter() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <>
      <div className="card">
        <h1>Contador</h1>
        <button onClick={handleClick}>Contador de click: {count}</button>
      </div>
    </>
  );
}

export default Counter;
