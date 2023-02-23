import { configureStore } from '@reduxjs/toolkit'
import isLoadingSlice from './slices/isLoading.slice'
import moviesListSlice from './slices/moviesList.slice'

export default configureStore({
    reducer: {
      moviesList: moviesListSlice,
      isLoading: isLoadingSlice
    }
})


