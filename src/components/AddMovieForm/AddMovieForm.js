import React, { useState } from 'react'
import {nanoid} from 'nanoid'
import Alert from '../Alert/Alert'
import { useNavigate } from 'react-router-dom'
import {useDispatch} from 'react-redux'
import { addMovie } from '../../features/moviesSlice'

export default function AddMovieForm() {

    // dispatch
    const dispatch = useDispatch()

    // buat navigasi 
    const navigation = useNavigate()
    
    const [formData, setFormData] =  useState(
        {
            title: "",
            date: "",
            linkPoster: "",
        }
    )

    const {title, date, linkPoster} = formData

    function handleChange(event) {
        const {name, value} = event.target

        setFormData(
            {
                ...formData,
                [name]: value,
            }
        )
    }

    // state handle empty title
    const [isTitleEmpty, setTitleEmpty] = useState(false)
    // state handle empty date
    const [isDateEmpty, setDateEmpty] = useState(false)
    // state handle empty date
    const [isLinkPosterEmpty, setLinkPosterEmpty] = useState(false)



    function validate() {
        if (title === "") {
            setTitleEmpty(true)
            return false
        } else if(date === "") {
            setTitleEmpty(false)
            setDateEmpty(true)
            return false
        } else if (linkPoster === "") {
            setLinkPosterEmpty(true)
            return false
        } else {
            setTitleEmpty(false)
            setDateEmpty(false)
            return true
        }
    }

    function submitMovie() {
        // deklarasi object movie
        const movie = {
            id: nanoid(),
            title: title,
            year: date,
            type: "Movie",
            poster:linkPoster,
        }
        dispatch(addMovie(movie))
        setTitleEmpty(false)

        navigation("/")
    }

    // handle submit 
    function handleSubmit(e) {
        // preventDefault = mencegah perilaku defaul ketika disubmit(refresh)
        e.preventDefault()

        validate() && submitMovie()
    }

  return (
    <div className="add-movie-container p-4 md:flex md:gap-x-12 md:items-center md:justify-center md:max-w-[1200px] md:m-auto">
        <div className="add-movie-image hidden md:flex w-[50%]">
            <img src="https://picsum.photos/500/300" alt="" className='max-w-[100%] rounded-xl' />
        </div>
        <div className='add-movie-form md:w-[50%]'>
            <h1 className='text-md font-semibold text-center py-3'>Add Movie Form</h1>
            <form action="" onSubmit={handleSubmit}>
                <div className="input-group mb-3">
                    <label htmlFor="title" className='text-sm font-semibold' >Title</label>
                    <input name='title' type="text" id='title' className='rounded-lg w-full' value={title} onChange = {handleChange}/>
                </div>
                {isTitleEmpty && <Alert>Title Harus diisi !</Alert>}
                
                <div className="input-group mb-3">
                    <label htmlFor="date" className='text-sm font-semibold'>Date</label>
                    <input name='date' type="text" id='date' className='rounded-lg w-full'  value={date} onChange={handleChange} />
                </div>
                {isDateEmpty && <Alert>Date Harus diisi !</Alert>}

                <div className="input-group mb-3">
                    <label htmlFor="linkPoster" className='text-sm font-semibold'>Link Poster</label>
                    <input name='linkPoster' type="text" id='linkPoster' className='rounded-lg w-full'  value={linkPoster} onChange={handleChange} />
                </div>
                {isLinkPosterEmpty && <Alert>Link Poster Harus diisi !</Alert>}
                <button className='px-3 py-2 bg-pink-600 w-full rounded-xl text-md text-white mt-2'>Add Movie</button>
            </form>
        </div>
    </div>
  )
}
