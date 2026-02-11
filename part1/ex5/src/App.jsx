const Header = (p) => {
  return (<h1>{p.course.name}</h1>)
}

const Part = (p) => {
  return (
    <p> {p.part.name} {p.part.exercises} </p>
  )
}

const Content = (p) => {
  return (
    <div>
      <Part part={p.course.parts[0]} />
      <Part part={p.course.parts[1]} />
      <Part part={p.course.parts[2]} />
    </div>
  )
}

const Total = (p) => {
  return (
    <p>Number of exercises {p.course.parts[0].exercises + p.course.parts[1].exercises + p.course.parts[2].exercises}</p>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: "Fundamentals of React",
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
  }

  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </div >
  )
}

export default App