import axios from 'axios'
import React, { useEffect} from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import DetailMovie from '../../components/DetailMovie/DetailMovie'
import Movies from '../../components/Movies/Movies'
import { updateMovies } from '../../features/moviesSlice'
import ENDPOINTS from '../../utils/constants/endpoint'

export default function Detail() {

  const params = useParams()

  // buat dispatch
  const dispatch = useDispatch()

  async function getRecommendation() {
    // Fetch api dengan axios
    const response = await axios(ENDPOINTS.Recommendations(params.id))
    dispatch(updateMovies(response.data.results))
}

useEffect(() =>{
  getRecommendation()
   }, [params.id] /*untuk merender ulang ketika id movie berubah*/ )


  return (
    <div>
      <DetailMovie/>
      <Movies title = "Movies Recommendations"/>
    </div>
  )
}