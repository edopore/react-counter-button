import "./App.css";
import Logo from "./images/freecodecamplogo.png";
import Button from "./components/Button";
import Counter from "./components/Counter";
import { useState } from "react";

function App() {
  const [numClicks, setNumClicks] = useState(0);

  const mannageClick = () => {
    console.log("click");
    setNumClicks(numClicks + 1);
  };
  const resetCounter = () => {
    console.log("Reset Click");
    setNumClicks(0);
  };
  return (
    <div className="App">
      <div className="freecodecamp-logo-container">
        <img className="freecodecamp-logo" src={Logo} alt="Freecodecamp logo" />
      </div>
      <div className="main-container">
        <Counter accumulator={numClicks} />
        <Button text="Click" mannageClick={mannageClick} isClickButton={true} />
        <Button
          text="Reset"
          mannageClick={resetCounter}
          isClickButton={false}
        />
      </div>
    </div>
  );
}

export default App;
