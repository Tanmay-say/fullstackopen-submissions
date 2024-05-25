import { useState } from 'react';

const App = () => {
  const [counter, setCounter] = useState(0);
  console.log('rendering with counter value', counter)

  const inc = () => {
    console.log('increasing, value before', counter)
    if (counter !== 10) {
      setCounter(counter + 1);
    } else {
      alert("Counter reached 10, resetting to 0");
      setCounter(0);
    }
  };

  const dec = () => {
    console.log('decreasing, value before', counter)
    if (counter > -10) {
      setCounter(counter - 1);
    } else {
      alert("Counter reached -10, resetting to 0");
      setCounter(0);
    }
  };

  const zero = () => {
    console.log('resetting to zero, value before', counter)
    setCounter(0);
  };
  return (
    <div>
      <Display counter={counter}/>
      <Button onClick={inc}  text={'INC'}/>
      <Button onClick={dec} text={'DEC'}/>
      <Button onClick={zero} text={'ZERO'}/>
    </div>
  );
};

const Button = ({onClick, text}) => {
  return (
    <button onClick={onClick}>
      {text}
    </button>
  );
};
const Display = ({counter}) => {
  return( <div>
    <h1>
    Counter = {counter}
    </h1>
    </div>);
}
export default App;
