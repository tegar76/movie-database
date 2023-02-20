import React from 'react'
import {Link} from 'react-router-dom'

export default function Movie(props) {

    // Destructing object props
    const {movie} = props

  return (
    <div className="movie-container my-8 md:my-3">
        <div className="movie">
          <Link to={`/movie/${movie.id}`}>
              <img src={movie.poster || `https://image.tmdb.org/t/p/w200/${movie.poster_path}`} alt="" className='max-w-[100%] rounded-xl' />
              
              
                <h3 className="movie-title text-md mt-3 font-semibold">{movie.title}</h3>
              <p className="movie-date">{movie.year || movie.release_date}</p>
            </Link>
        </div>
    </div>
  )
}
