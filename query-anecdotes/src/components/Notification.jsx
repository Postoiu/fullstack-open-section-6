import { useNotificationMsg } from "../hooks/notification"

const Notification = () => {
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1,
    marginBottom: 5
  }

  const message = useNotificationMsg()
  
  if (message === '') return null

  return (
    <div style={style}>
      {message}
    </div>
  )
}

export default Notification
