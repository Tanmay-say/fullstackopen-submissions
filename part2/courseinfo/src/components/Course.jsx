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
        {parts.map(part => <Part key={part.id} part={part.name} ex={part.exercises}/>)}
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
    const total = parts.reduce((sum, part) => sum + part.exercises, 0);
    console.log(total);
    return (
      <div>
        <p><strong>total of {total} exercises </strong></p>
      </div>
    );
  }
export default Course;  