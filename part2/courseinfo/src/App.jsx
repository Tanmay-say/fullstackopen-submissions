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

const Content = (props) => {
  return (
    <div>
      <Part part={props.parts[0].name} ex={props.parts[0].exercises}/>
      <Part part={props.parts[1].name} ex={props.parts[1].exercises}/>
      <Part part={props.parts[2].name} ex={props.parts[2].exercises}/>
    </div>
  );
};

const Part = (props) => {
  return (
    <div>
      <p>{props.part} {props.ex}</p>
    </div>
  );
};



export default App;
