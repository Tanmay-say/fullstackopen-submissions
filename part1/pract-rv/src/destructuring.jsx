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
  
  
  const Friend = ({friends}) => {
    return (
      <div>
        <Diff friend={friends[0]}/>
        <Diff friend={friends[1]}/>
      </div>
    )  
  }
  
  const Diff = ({friend}) => {
    const bornYear = () => {
      const yearNow = new Date().getFullYear()
      return yearNow - friend.age
    }
    return(
      <div>
        <h1>My name is {friend.name} and my age is {friend.age} and born in year {bornYear()}</h1>
      </div>
    )
  }
  export default App