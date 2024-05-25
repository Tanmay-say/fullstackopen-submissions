import { useState } from 'react'

const App = () => {

  const [ counter, setCounter ] = useState(0)


  /*if(counter != 20){
  setTimeout(
    () => setCounter(counter + 1),
    1000
  )}
  else{
    setTimeout(
      () => setCounter(0),
      1000
    )// reset the counter to 0;
  }

  console.log('rendering...', counter)*/

  const inc = () => {
    if(counter != 10){
      setTimeout(
        () => setCounter(counter + 1),
      )}
      else{
        setTimeout(
          () => setCounter(0),
        )// reset the counter to 0;
      }
    console.log('Inceremented')
  }

  const dec = () => {
    if(counter > -10){
    setTimeout(
      () => setCounter(counter - 1),
    )
  }else{
    setTimeout(
      () => setCounter(0),
    )// reset the counter to 0;
  }
    console.log('Decremented')
  }

  console.log('Counter value = ', counter)

  return (
    <div>
      <h1>Counter = {counter}</h1>
      <button onClick={inc}>
        INC
      </button>
      <button onClick={dec}>
        DEC
      </button>
      <button onClick={() => setCounter(0)}>
        ZERO
      </button>
    </div>
  )
}

export default App