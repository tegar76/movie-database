import axios from 'axios'
import React, { useEffect} from 'react'
import { useDispatch } from 'react-redux'
import Movies from '../../components/Movies/Movies'
import { updateMovies } from '../../features/moviesSlice'
import ENDPOINTS from '../../utils/constants/endpoint'

export default function NowPlaying() {
  // buat dispatch
  const dispatch = useDispatch()

  async function getLatestMovies() {
    // Fetch api dengan axios
    const response = await axios(ENDPOINTS.nowPlaying)
    dispatch(updateMovies(response.data.results))
  }

  useEffect(() => {
    getLatestMovies()
  }, [])

  return (
    <div>
         <Movies title = "Now Playing"/>
    </div>
  )
}
