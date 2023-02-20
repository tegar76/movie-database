import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ENDPOINTS from '../../utils/constants/endpoint'

export default function DetailMovie() {

    // Todo:
    // Ambil id dari parameter url
    // fetch detail movie by id

    const params = useParams()

    // buat state movie
    const [movie, setMovie] = useState("")

    function getTrailer() {
        const youtubeRootUrl = "https://www.youtube.com/watch?v="
        const findResultVideoTrailer = movie && movie.videos.results.find((videosTrailer)=> {
            return videosTrailer.type === "Trailer"
        })
        const trailer = `${youtubeRootUrl}${findResultVideoTrailer.key}`
        return trailer
    }

    async function getDetailMovie() {
        // Fetch api dengan axios
        const response = await axios(ENDPOINTS.detail(params.id))
        setMovie(response.data)
    }

    const genres = movie && movie.genres.map((genre) => {
        return genre.name
    }).join(", ")

    useEffect(() => {
        getDetailMovie()
    }, [params.id] /*untuk merender ulang ketika id movie berubah*/ )
        
    return (
        <div className="hero-container my-5 p-4 lg:max-w-[1200px] mx-auto">
            <section className='md:flex md:items-center'>
                <div className='poster md:mr-1 md:w-[40%]'>
                    <img src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`} alt="" className='max-w-[60%] rounded-xl' />
                </div>
                <div className='text-center md:text-left md:ml-1 md:w-[60%]'>
                    <h2 className='font-bold'>{movie.title}</h2>
                    <h3 className='font-medium mt-1 mb-3'>{genres}</h3>
                    <p className='text-sm mb-5'>{movie.overview}</p>
                    <a type='button' href={getTrailer()} target='_blank' className='px-5 py-2 bg-pink-600 hover:bg-blue-600 text-white rounded-lg my-3 text-sm'> Watch</a>
                </div>
            </section>
        </div>
    )
}
