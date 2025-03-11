import axios from 'axios'

const baseUrl = 'http://localhost:3001/anecdotes'
const getId = () => (100000 * Math.random()).toFixed(0)

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const createNew = async (content) => {
  const object = {
    content,
    votes: 0,
    id: getId().toString()
  }
  const response = await axios.post(baseUrl, object)
  return response.data
}

const updateAnecdote = async (id, update) => {
  const response = await axios.patch(`${baseUrl}/${id}`, update)
  return response.data
}

export default { getAll, createNew, updateAnecdote }