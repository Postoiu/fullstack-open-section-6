import { createContext, useContext, useReducer } from "react";

const notificationReducer = (state, action) => {
  switch(action.type) {
    case 'SET':
      return action.payload
    case 'CLEAR':
      return ''
    default:
      return state
  }
}

const NotificationContext = createContext()

export const NotificationContextProvider = ({ children }) => {
  const [notificationMsg, notificationDispatch] = useReducer(notificationReducer, '')

  return (
    <NotificationContext.Provider value={ [notificationMsg, notificationDispatch] }>
      {children}
    </NotificationContext.Provider>
  )
}

export default NotificationContext