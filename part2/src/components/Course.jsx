const Course = ({ course }) => {
    return (<div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
      </div>
    )
  }
  const Header = ({ course }) => {
    return <h2>{course}</h2>
  }
  const Content = ({ parts }) => {
    return (
      <div>
        {parts.map (part => <Part key={part.id} part={part} />)}
      </div>
    )
  }
  const Part = ({ part }) => {
    return <p>{part.name} {part.exercises}</p>
  }
  const Total = ({ parts }) => {
    const total = parts.reduce((sum , part ) => sum + part.exercises , 0)
    console.log(total)
    return(
      <div>
        <p><strong>total of {total} exercises</strong></p>
      </div>
    )
  }
export default Course