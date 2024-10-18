import { useState } from "react";

function App() {
  const [color, setColor] = useState("blue");

  return (
    <div
      className="w-100 h-full d-flex flex-column align-items-center justify-content-center"
      style={{ backgroundColor: color, height: "100vh" }}
    >
      <div className="d-flex bg-white rounded bottom-100">
        <button className="btn btn-danger m-2" onClick={() => setColor("red")}>
          Red
        </button>
        <button
          className="btn btn-success m-2"
          onClick={() => setColor("green")}
        >
          Green
        </button>
        <button
          className="btn btn-warning m-2"
          onClick={() => setColor("yellow")}
        >
          Yellow
        </button>
        <button className="btn btn-dark m-2" onClick={() => setColor("black")}>
          Black
        </button>
        <button
          className="btn m-2"
          style={{ backgroundColor: "gray", color: "white" }}
          onClick={() => setColor("gray")}
        >
          Gray
        </button>
        <button
          className="btn m-2"
          style={{ backgroundColor: "purple", color: "white" }}
          onClick={() => setColor("purple")}
        >
          Purple
        </button>
        <button
          className="btn m-2"
          style={{ backgroundColor: "pink", color: "white" }}
          onClick={() => setColor("pink")}
        >
          Pink
        </button>
        <button
          className="btn m-2"
          style={{ backgroundColor: "orange", color: "white" }}
          onClick={() => setColor("orange")}
        >
          Orange
        </button>
      </div>
    </div>
  );
}

export default App;
