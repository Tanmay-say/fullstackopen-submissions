const App = () => {
  const course = 'Half Stack application development'
  const part = [
    {name : 'Fundamentals of React' , exercise : 10},
    {name : 'Using props to pass data' , exercise : 7},
    {name : 'State of a component' , exercise : 14},
  ]
  return (
    <div>
    <Header course={course}/>
    <Content part={part}/>
    <Total part={part}/>
    </div>
  )
}
const Header = (props) =>{
  return(
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Content = (props) =>{
  return(
    <div>
      <Part part={props.part[0].name} ex={props.part[0].exercise}/>
      <Part part={props.part[1].name} ex={props.part[1].exercise}/>
      <Part part={props.part[2].name} ex={props.part[2].exercise}/>
    </div>
  )
}

const Part = (props) =>{
  return(
    <div>
      <p>{props.part} {props.ex}</p>
    </div>
  )
} 
const Total = (props) => {
  return (
    <div>
      <p>Number of exercises {props.part[0].exercise + props.part[1].exercise + props.part[2].exercise}</p>
    </div>
  )
}
export default App