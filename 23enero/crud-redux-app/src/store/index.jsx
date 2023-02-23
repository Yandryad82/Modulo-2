import { configureStore } from '@reduxjs/toolkit'
import toDosSlice from './slices/toDos.slice'

export default configureStore({
    reducer: {
      toDos: toDosSlice
    }
})
