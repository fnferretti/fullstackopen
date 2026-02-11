import { useState } from 'react'

const Title = ({ text }) => <h1>{text}</h1>

const Button = ({ name, handler }) => {
  return (
    <button onClick={handler}>{name}</button>
  )
}

const getRandomInt = (max) => {
  return Math.floor(Math.random() * max)
}

const randomHandler = (max, selected, setSelected) => {
  let dbg_msg = `prev: ${selected}`
  selected = getRandomInt(max)
  setSelected(selected)
  console.log(dbg_msg + `, new: ${selected}`)
}


const votesHandler = (selected, votes, setVotes) => {
  const copy = [...votes]
  copy[selected] += 1
  setVotes(copy)
}

const getMaxIdx = (array) => {
  let maxIndex = 0
  let maxValue = array[0]

  for (let i = 1; i < array.length; i++) {
    if (array[i] > maxValue) {
      maxValue = array[i]

      maxIndex = i
    }
  }

  return maxIndex
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0))
  const mostVotesIdx = getMaxIdx(votes)

  return (
    <div>
      <Title text='Anecdote of the day' />
      <p>
        {anecdotes[selected]}
        <br />
        has {votes[selected]} votes
      </p>
      <Button name='vote' handler={() => votesHandler(selected, votes, setVotes)} />
      <Button name='next anecdote'
        handler={() => randomHandler(anecdotes.length, selected, setSelected)} />

      <Title text='Anecdote with most votes' />
      <p>
        {anecdotes[mostVotesIdx]}
        <br />
        has {votes[mostVotesIdx]} votes
      </p>
    </div>
  )
}

export default App