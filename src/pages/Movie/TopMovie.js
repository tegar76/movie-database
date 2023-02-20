import React, { useEffect} from 'react'
import axios from 'axios'
import Movies from '../../components/Movies/Movies'
import ENDPOINTS from '../../utils/constants/endpoint'
import { useDispatch } from 'react-redux'
import { updateMovies } from '../../features/moviesSlice'


export default function TopMovie() { 

  const dispatch = useDispatch()

  async function getTrendingMovies() {
    // Fetch data dari axios
    const response = await axios(ENDPOINTS.topMovie)

    dispatch(updateMovies(response.data.results))
  }

// Tugas sampungan useeffect 
  useEffect(()=>{
    getTrendingMovies()
  },[])

  return (
    <div>
        <Movies title="Top Movie"/>
    </div>
  )
}
