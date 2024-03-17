const App = () => {
  const now = new Date()
  const a = 10
  const b = 20
  console.log(now, a+b)
  return (
    <div>
      <p>Hello world, it is {now.toString()}</p>
      <p>
        {a} plus {b} is {a + b}
      </p>
      <Hello name='Tanmay' surname='Sayare'/>
      <Hello name='Sayare'/>
    </div>
  )
}


const Hello = (props) => {
  console.log(props)
  return (
    <div>
      <p>Hello {props.name} {props.surname}</p>
    </div>
  )
}

export default App