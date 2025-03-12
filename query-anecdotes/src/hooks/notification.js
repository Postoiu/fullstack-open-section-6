import { useContext } from "react"
import NotificationContext from "../NotificationContext"

export const useNotificationMsg = () => {
  const [message] = useContext(NotificationContext)
  return message
}

export const useNotification = () => {
  const [, dispatch] = useContext(NotificationContext)
  return (action, timeout) => {
    dispatch(action)

    setTimeout(() => {
      dispatch({ type: 'CLEAR' })
    }, timeout * 1000);
  }
}