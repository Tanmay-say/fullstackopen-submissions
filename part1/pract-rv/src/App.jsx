const App = () => {
  const friends = [
    {name:'Tanmay' , age : 20},
    {name:'Sultan' , age : 38},
  ]
  return (
    <div>
      <Friend  friends={friends}/>
    </div>
  )
}

const Diff = ({friend}) => {
  return(
    <div>
      <h1>My name is {friend.name} and my age is {friend.age}</h1>
    </div>
  )
}
const Friend = ({friends}) => {
  return (
    <div>
      <Diff friend={friends[0]}/>
      <Diff friend={friends[1]}/>
    </div>
  )  
}

export default App