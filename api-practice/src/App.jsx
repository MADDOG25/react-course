import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState([]);


  useEffect(() => {
    fetch("https://meowfacts.herokuapp.com/")
    .then(res => res.json())
    .then(res => setData(res.data))
  }, []);

  return (
    <>
      <div className="App">
        <h1>Practice Api</h1>
      </div>
      <div>
        <p>{data}</p>
      </div>
    </>
  );
}

export default App;
