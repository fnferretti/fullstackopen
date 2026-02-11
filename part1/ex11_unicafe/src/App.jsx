import { useState } from 'react'

const Title = ({ text }) => <h1>{text}</h1>

const Button = ({ text, handlerFunc }) => {
  return (
    <button onClick={handlerFunc} >{text}</button>
  )
}

const StatisticLine = ({ text, value }) => {
  return (
    <tr>
      <th>{text}</th>
      <td>{value}</td>
    </tr>
  )
}

const Statistics = ({ good, neutral, bad }) => {
  if (good + neutral + bad === 0) {
    return (
      <div>
        <Title text='Statistics' />
        <p>No feedback given</p>
      </div>
    )
  }
  return (
    <div>
      <Title text='Statistics' />
      <table>
        <tbody>
          <StatisticLine text='good' value={good} />
          <StatisticLine text='neutral' value={neutral} />
          <StatisticLine text='bad' value={bad} />
          <StatisticLine text='all' value={good + neutral + bad} />
          <StatisticLine text='avg' value={(good - bad) / (good + neutral + bad)} />
          <StatisticLine text='positive' value={good / (good + neutral + bad) * 100 + "%"} />
        </tbody>
      </table>
    </div>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleFeedback = (name, value, setter) => {
    const newValue = value + 1
    console.log(`prev ${name}: ${value}, new ${name}: ${newValue}`)
    setter(newValue)
  }

  return (
    <div>
      <Title text='give feedback' />
      <Button text='good' handlerFunc={() => handleFeedback('good', good, setGood)} />
      <Button text='neutral' handlerFunc={() => handleFeedback('neutral', neutral, setNeutral)} />
      <Button text='bad' handlerFunc={() => handleFeedback('bad', bad, setBad)} />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App