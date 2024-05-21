import { useState } from 'react'

const App = () => {

  const [ counter, setCounter ] = useState(0)

  console.log('rendering...', counter)

  if(counter != 20){
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

  return (
    <div><h1>Counter is {counter}</h1></div>
  )
}

export default App