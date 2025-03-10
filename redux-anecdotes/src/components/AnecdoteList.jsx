import { useSelector, useDispatch } from 'react-redux'

import { voteAnecdote } from '../reducers/anecdoteReducer'
import { createNotification, hideNotification, showNotification } from '../reducers/notificationReducer'

const AnecdoteList = () => {
  const anecdotes = useSelector(({ anecdotes, filter }) => {
    if(filter.length < 3) {
      return anecdotes
    }

    return anecdotes.filter(anecdote => anecdote.content.includes(filter))
  })

  const dispatch = useDispatch()

  const vote = (id) => {
    const votedAnecdote = anecdotes.find(a => a.id === id)

    dispatch(voteAnecdote(id))
    dispatch(createNotification(`you voted '${votedAnecdote.content}'`))
    dispatch(showNotification())

    setTimeout(() => dispatch(hideNotification()), 5000)
  }

  return (
    <>
      {anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      )}
    </>

  )

}

export default AnecdoteList