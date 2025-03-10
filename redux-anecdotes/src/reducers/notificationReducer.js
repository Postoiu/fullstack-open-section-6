import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  message: '',
  isVisible: false
}

const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    createNotification(state, action) {
      return { ...state, message: action.payload }
    },
    showNotification(state) {
      return { ...state, isVisible: true }
    },
    hideNotification(state) {
      return { ...state, isVisible: false }
    }
  }
})

export const { createNotification, showNotification, hideNotification } = notificationSlice.actions
export default notificationSlice.reducer