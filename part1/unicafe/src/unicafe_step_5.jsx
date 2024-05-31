import { useState } from 'react'


const Button = ({ onClick, text }) => {
  return (
    <button onClick={onClick}>
      {text}
    </button>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const Statistics = ({good , neutral , bad }) => {
    const total = good + neutral + bad  // Calculate the total number of feedback
    const average = (good - bad) / total  // Calculate the average score
    const positivePercentage =  (good / total) * 100 // Calculate the percentage of positive feedback
  
    if(total === 0){
      return <p>No feedback given</p>
    }
    return (
      <div>
        <StatisticLine text='good' value={good} />
        <StatisticLine text='neutral' value={neutral} />
        <StatisticLine text='bad' value={bad} />
        <p>all {total}</p>
        <p>average {average.toFixed(2)}</p>
        <p>positive {positivePercentage.toFixed(2)} %</p>
      </div>
    )
  
  }

  const StatisticLine = ({text, value}) => {
    return (
      <p>{text} {value}</p>
    )
  }

  return (
    <div>
      <h1>give feedback</h1>
      <p>
        <Button onClick={() => setGood(good + 1)} text='good' />
        <Button onClick={() => setNeutral(neutral + 1)} text='neutral' />
        <Button onClick={() => setBad(bad + 1)} text='bad' />
      </p>
      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} setBad={setBad} setGood={setGood} setNeutral={setNeutral} />
    </div>
  )
}



export default App
