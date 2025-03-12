import { useMutation, useQueryClient } from "@tanstack/react-query"
import { createAnecdote } from "../requests"
import { useNotification } from "../hooks/notification"

const AnecdoteForm = () => {
  const queryClient = useQueryClient()
  const dispatchNotification = useNotification()

  const newAnecdoteMutation = useMutation({
    mutationFn: createAnecdote,
    onSuccess: (newAnecdote) => {
      dispatchNotification({ type: 'SET', payload: `anecdote ${newAnecdote.content} added`}, 5)
      const anecdotes = queryClient.getQueryData(['anecdotes'])
      queryClient.setQueryData(['anecdotes'], anecdotes.concat(newAnecdote))
    },
    onError: (error) => {
      dispatchNotification({ type: 'SET', payload: error.response.data.error }, 5)
    },
    retry: 1
  })

  const onCreate = (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    event.target.anecdote.value = ''
    newAnecdoteMutation.mutate({ content, votes: 0 })
}

  return (
    <div>
      <h3>create new</h3>
      <form onSubmit={onCreate}>
        <input name='anecdote' />
        <button type="submit">create</button>
      </form>
    </div>
  )
}

export default AnecdoteForm
