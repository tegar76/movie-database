import React from 'react'
import { useSelector } from 'react-redux'
import Movie from '../Movie/Movie'

export default function Movies(props) {

    // destructing props
    const {title} = props

    const movies = useSelector((store) => store.movies.movies)

  return (
    <div className="movies flex justify-center md:block p-4 lg:max-w-[1200px] mx-auto">
        <section>
            <h2 className='font-semibold mb-2'>{props.title}</h2>
            <div className='movies-container md:flex flex-wrap gap-x-6'>
                {
                    // Looping data movies dengan map
                    // Kirim props movies ke movie untuk ditangkap di movie
                    movies.map(function(movie){
                        return <Movie key = {movie.id} movie = {movie}/>
                    })
                }
            </div>
        </section>
    </div>
  )
}
