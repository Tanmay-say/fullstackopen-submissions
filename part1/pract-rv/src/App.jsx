
const App1 = () => {
  const friends = [ 'Tanmay1', 'Sayare1']

  return (
    <div>
      <p>{friends}</p>
    </div>
  )
}

const App = () => {
  const friends = [
    {name:'Tanmay' , age : 20},
    {name:'Sultan' , age : 38},
  ]
  return (
    <div>
      <p>{friends[0].name}{friends[0].age}</p>
      <p>{friends[1].name}{friends[1].age}</p>
      <App1 />
    </div>
  )
}

export default App