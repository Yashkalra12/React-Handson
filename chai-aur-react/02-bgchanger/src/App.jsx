import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <div
      className="w-full min-h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-10">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg px-3 py-3 rounded-3xl" style={{backgroundColor:"white"}}>
          <button
            className="outline-none px-4 py-2 text-white font-bold rounded"
            style={{ backgroundColor: "red" }}
            onClick={() => setColor("red")}
          >
            Red
          </button>
          <button
            className="outline-none px-4 py-2 text-white font-bold rounded"
            style={{ backgroundColor: "Grey" }}
            onClick={() => setColor("Grey")}
          >
            Grey
          </button>
          <button
            className="outline-none px-4 py-2 text-white font-bold rounded"
            style={{ backgroundColor: "Pink" }}
            onClick={() => setColor("Pink")}
          >
            Pink
          </button>
          <button
            className="outline-none px-4 py-2 text-white font-bold rounded"
            style={{ backgroundColor: "green" }}
            onClick={() => setColor("green")}
          >
            Green
          </button>
          <button
            className="outline-none px-4 py-2 text-white font-bold rounded"
            style={{ backgroundColor: "blue" }}
            onClick={() => setColor("blue")}
          >
            blue
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
