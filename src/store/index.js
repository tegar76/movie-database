import {configureStore} from '@reduxjs/toolkit'
import moviesReducer from '../features/moviesSlice'

// Buat Store
// MMenyimpan berbagai slice reducer

const store =  configureStore({
    reducer: {
        movies: moviesReducer,
    }
})

export default store 