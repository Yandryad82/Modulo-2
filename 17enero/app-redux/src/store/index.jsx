import { configureStore } from '@reduxjs/toolkit'
import usernameSlice from './slices/username.slice'
import counterSlice from './slices/counter.slice'
import messageSlice from './slices/message.slice'

export default configureStore({
    reducer: {
      username: usernameSlice,
      counter: counterSlice,
      message: messageSlice
      }
  })