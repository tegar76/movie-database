// createSlace
import {createSlice} from '@reduxjs/toolkit'
import data from '../../components/utils/constants/data'

// Buat slice: untuk generate action dan reducer
// menerima param object: name, initial state, reducers

const moviesSlice = createSlice({
    name: "Movies Slice",
    initialState: {
        movies: data,
    },
    reducers: {
        addMovie(state, action) {
            // add movie to movies
            state.movies.push(action.payload)
        },
        // Membuat reducer update movie 
        updateMovies(state, action) {
            state.movies = action.payload
        }
    }
})

// generate action dan reducers
const moviesReducer = moviesSlice.reducer
const {addMovie, updateMovies} = moviesSlice.actions

// export action dan reducer
export default moviesReducer
export {addMovie, updateMovies}
