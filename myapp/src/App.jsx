import { useState } from "react";

function App() {

  const [isTrue, setIsTrue] = useState(true);

  const changeColor = () => {
    setIsTrue(!isTrue);
  };

  return (
    <div>

      <button
        onClick={changeColor}
        style={{
          backgroundColor: isTrue ? "red" : "green",
          color: "white",
          padding: "10px 20px",
          border: "none",
          fontSize: "20px"
        }}
      >
        Click Me
      </button>

    </div>
  );
}

export default App;