import { useState } from "react";

const App = () => {
  const [clicks, setClicks] = useState({
    left: 0,
    right: 0
  });

  console.log('rendering with clicks value', clicks);

  const handleLeftClick = (operation) => {
    if (operation === "inc") {
      const newClick = {
        left: clicks.left + 1,
        right: clicks.right
      };
      setClicks(newClick);
      console.log('increasing, left value before', clicks);
    } else if (operation === "dec") {
      const newClick = {
        left: clicks.left - 1,
        right: clicks.right
      };
      setClicks(newClick);
      console.log('decreasing, left value before', clicks);
    }
  };

  const handleRightClick = (operation) => {
    if (operation === "inc") {
      const newClick = {
        left: clicks.left,
        right: clicks.right + 1
      };
      setClicks(newClick);
      console.log('increasing, right value before', clicks);
    } else if (operation === "dec") {
      const newClick = {
        left: clicks.left,
        right: clicks.right - 1
      };
      setClicks(newClick);
      console.log('decreasing, right value before', clicks);
    }
  };

  const reset = () => {
    const newClick = {
      left: 0,
      right: 0
    };
    setClicks(newClick);
    console.log('resetting to zero, value before', clicks);
  }
  return (
    <div>
    <p>
      {clicks.left}
      <button onClick={() => handleLeftClick("inc")}>INC left</button>
      <button onClick={() => handleLeftClick("dec")}>DEC left</button>
      Choose option
      <button onClick={() => handleRightClick("inc")}>INC right</button>
      <button onClick={() => handleRightClick("dec")}>DEC right</button>
      {clicks.right}
      </p>
      <p><button onClick={reset}>Reset</button></p>
    </div>
  );
};

export default App;
