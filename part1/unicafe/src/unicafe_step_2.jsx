import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      <p>
        <Button onClick={() => setGood(good + 1)} text='good' />
        <Button onClick={() => setNeutral(neutral + 1)} text='neutral' />
        <Button onClick={() => setBad(bad + 1)} text='bad' />
      </p>
      <h1>statistics</h1>
      <Calculation good={good} neutral={neutral} bad={bad} setBad={setBad} setGood={setGood} setNeutral={setNeutral} />
    </div>
  )
}

const Calculation = ({good , neutral , bad }) => {
  const total = good + neutral + bad  // Calculate the total number of feedback
  const average = (good - bad) / total  // Calculate the average score
  const positivePercentage =  (good / total) * 100 // Calculate the percentage of positive feedback

  if(total === 0){
    return <p>No feedback given</p>
  }
  return (
    <div>
          <p>good {good}</p>
          <p>neutral {neutral}</p>
          <p>bad {bad}</p>
          <p>all {total}</p>
          <p>average {average.toFixed(2)}</p>
          <p>positive {positivePercentage.toFixed(2)} %</p>
    </div>
  )

}
const Button = ({ onClick, text }) => {
  return (
    <button onClick={onClick}>
      {text}
    </button>
  )
}

export default App
