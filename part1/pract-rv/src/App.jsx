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

const Diff = (props) => {
  return(
    <div>
      <h1>My name is {props.friends.name} and my age is {props.friends.age}</h1>
    </div>
  )
}
const Friend = (props) => {
  return (
    <div>
      <Diff friends={props.friends[0]}/>
      <Diff friends={props.friends[1]}/>
    </div>
  )  
}

export default App