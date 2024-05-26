import { useState } from "react";

const App = () => {
  const [left , setLeft]  = useState(0);
  const [right , setRight] = useState(0);
  const [allClicks, setAll] = useState([]);
  
  /*const [clicks, setClicks] = useState({
    left: 0,
    right: 0
  });*/

  console.log('rendering with clicks value', allClicks);


  const handleLeftClick = () => {
    allClicks.push('L')
    setAll(allClicks);
    setLeft(left + 1);
  }

  const handleRightClick = () => {
    allClicks.push('R')
    setAll(allClicks);
    setRight(right + 1);
  }

  const pop = () => {
    if (allClicks.length > 0) {
      const lastClick = allClicks[allClicks.length - 1];
      const newAllClicks = allClicks.slice(0, -1);
      setAll(newAllClicks);
      if (lastClick === 'L') {
        setLeft(left - 1);
      } else if (lastClick === 'R') {
        setRight(right - 1);
      }
    }
  };
  
  /*const handleLeftClick = (operation) => {
    if (operation === "inc") {
      setAll(allClicks.concat('L+'));
      setLeft(left + 1);
      console.log('increasing, left value before', allClicks);
    } else if (operation === "dec") {
      setAll(allClicks.concat('L-'));
      setLeft(left - 1);
      console.log('decreasing, left value before', allClicks);
    }
  };

  const handleRightClick = (operation) => {
    if (operation === "inc") {
      setAll(allClicks.concat('R+'));
      setRight(right + 1);
      console.log('increasing, right value before', allClicks);
    } else if (operation === "dec") {
      setAll(allClicks.concat('R-'));
      setRight(right - 1);
      console.log('decreasing, right value before', allClicks);
    }
  };*/

  const reset = () => {
    setAll([]);
    setLeft(0);
    setRight(0);
    console.log('resetting to zero, value before', allClicks);
  }


  return (
    /*.<div>
    <p>
      {left}
      <Button onClick={() => handleLeftClick("inc")} text="INC left"/>
      <Button onClick={() => handleLeftClick("dec")} text="DEC left"/>
      Choose option
      <Button onClick={() => handleRightClick("inc")} text="INC right"/>
      <Button onClick={() => handleRightClick("dec")} text="DEC right"/>
      {right}
      </p>
      <p><Button onClick={reset} text={"reset"}/> </p>
      <p>{allClicks.join(' ')}</p>
    </div>*/
    <div>
    {left}
    <Button onClick={handleLeftClick} text={'Push left'} />
    <Button onClick={handleRightClick} text={'Push right'}/>
    {right}
    <p><Button onClick={reset} text={"reset"}/>
    <Button onClick={pop} text={"POP"}/> </p>
    <p>{allClicks.join(' ')}</p>
  </div>
);
};

const Button = ({onClick,text}) => {
    return (
      <button onClick={onClick}>{text}</button>
    );

}

export default App;
