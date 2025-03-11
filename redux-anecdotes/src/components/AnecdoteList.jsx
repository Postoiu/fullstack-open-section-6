import { useSelector, useDispatch } from 'react-redux'

import { voteAnecdote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'

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

    dispatch(voteAnecdote(id, { votes: votedAnecdote.votes + 1 }))
    dispatch(setNotification(`you voted '${votedAnecdote.content}'`, 5))
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