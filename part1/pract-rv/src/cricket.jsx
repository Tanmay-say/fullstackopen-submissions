import React, { useState } from "react";

const App = () => {
  const [dot, setDot] = useState(0);
  const [wicket, setWicket] = useState(0);
  const [allClicks, setAll] = useState([]);
  const [runs, setRuns] = useState(0);

  const handleDot = () => {
    setAll(allClicks.concat("*"));
    setDot(dot + 1);
  };

  const handleWicket = () => {
    setAll(allClicks.concat(" W "));
    setWicket(wicket + 1);
  };

  const handleRun = (runValue) => {
    setAll(allClicks.concat(runValue));
    const run = parseInt(runValue, 10);
    setRuns(runs + run);
  };

  const handleWide = () => {
    setAll(allClicks.concat("WD"));
    setRuns(runs + 1);
  };

  return (
    <div>
      <Display handleRun={handleRun} handleWide={handleWide} runs={runs} />
      <History allClicks={allClicks} />
      <Button handleClick={handleDot} text="Dot" />
      <Button handleClick={handleWicket} text="Wicket" />
      <p>Total Balls: {dot + wicket + allClicks.filter(click => !isNaN(click) || click === "*").length}</p>
      <p>Total Runs: {runs}</p>
    </div>
  );
};

const Display = ({ handleRun, handleWide, runs }) => {
  return (
    <div>
      <h1>Cricket Score Board</h1>
      <h2>Runs = {runs}</h2>
      <p>
        <CircleButton handleClick={() => handleRun(1)} text="1" />
        <CircleButton handleClick={() => handleRun(2)} text="2" />
        <CircleButton handleClick={() => handleRun(3)} text="3" />
        <CircleButton handleClick={() => handleRun(4)} text="4" />
        <CircleButton handleClick={() => handleRun(6)} text="6" />
        <CircleButton handleClick={handleWide} text="WD" />
      </p>
    </div>
  );
};

const CircleButton = ({ handleClick, text }) => {
  return (
    <button className="circleButton" onClick={handleClick}>
      {text}
    </button>
  );
};

const History = ({ allClicks }) => {
  if (allClicks.length === 0) {
    return <div>The first over is yet to be bowled</div>;
  }
  return <div>Over: {allClicks.join("  ")}</div>;
};

const Button = ({ handleClick, text }) => {
  return (
    <button onClick={handleClick}>
      {text}
    </button>
  );
};

export default App;
