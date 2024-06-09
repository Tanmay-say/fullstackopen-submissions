const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      },
      {
        name: 'Redux',
        exercises: 11
      }
    ]
  };

  return (
    <div>
      <Course course={course}/>
    </div>
  );
};
const Course = ({ course }) => { 
  return (
    <div>
      <Header course={course.name}/>
      <Content parts={course.parts}/>
      <Total parts={course.parts}/>
    </div>
  );
}

const Header = (props) => {
  return (
    <div>
      <h2>{props.course}</h2>
    </div>
  );
};

const Content = ({parts}) => {
  return (
    <div>
      {parts.map(part => <Part part={part.name} ex={part.exercises}/>)}
    </div>
  );
};

const Part = ({part , ex}) => {
  return (
    <div>
      <p>{part} {ex}</p>
    </div>
  );
};

const Total = ({parts}) => {
  let total = 0
  parts.map(part => total += part.exercises)
  return (
    <div>
      <p><strong>total of {total} exercises </strong></p>
    </div>
  );
}


export default App;
