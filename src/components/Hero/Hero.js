import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ENDPOINTS from '../../utils/constants/endpoint'
/* eslint-disable react-hooks/exhaustive-deps */

export default function Hero() {

  // buat state movie
  const [movie, setMovie] = useState("")

  const genres = movie && movie.genres.map(
    (genre) => genre.name 
  ).join(", ")

  // const trailer = movie && `https://www.youtube.com/watch?v=${movie.videos.results[22].key}`

  async function getTrendingMovie() {
    // Fetch api dengan axios
    const response = await axios(ENDPOINTS.hero)
    const resultData = response.data.results[0]
    return resultData
  }

  async function getDetailMovie() {
    const trendingMovie = await getTrendingMovie()
    const idMovie = trendingMovie.id

    // Fetch Detail movie dan dapatkan video
    const response = await axios(ENDPOINTS.detail(idMovie))
    setMovie(response.data)
  }


  function getTrailer() {
    const youtubeRootUrl = "https://www.youtube.com/watch?v="
    // Find video movie == trailer
    const findResultVideoTrailer = movie && movie.videos.results.find((videosTrailer)=> {
        return videosTrailer.type === "Trailer"
    })
    const trailer = `${youtubeRootUrl}${findResultVideoTrailer.key}`
    return trailer
}

  useEffect(() => {
    getDetailMovie()
  }, [])

  console.log(movie)

  return (
    <div className="hero-container my-5 p-4 lg:max-w-[1200px] mx-auto">
        <section className='md:flex md:items-center'>
            <div className='text-center md:text-left md:mr-8 md:w-[50%]'>
                <h2 className='font-bold'>{movie.title}</h2>
                <h3 className='font-medium mt-1 mb-3'>{genres}</h3>
                <p className='text-sm mb-5'>{movie.overview}</p>
                <a type='button' href={getTrailer() && ""} target='_blank' className='px-5 py-2 bg-pink-600 hover:bg-blue-600 text-white rounded-lg my-3 text-sm'> Watch</a>
            </div>
            <div className='md:ml-8 md:w-[50%]'>
                <img src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`} alt="" className='max-w-[100%] rounded-xl' />
            </div>
        </section>
    </div>
  )
}
