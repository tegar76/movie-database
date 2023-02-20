import {BsListUl} from 'react-icons/bs'
import { Link, } from 'react-router-dom'

export default function Navbar() {

  let isNavActive = false

  function handleShowNav() {
      if (isNavActive === false) {
        document.getElementById('navbarList').classList.remove('hidden')
        isNavActive = true
      } else {
        document.getElementById('navbarList').classList.add('hidden')
        isNavActive = false
      }
  }


  return (
    <nav>
      <div className="navbar-container  p-4 bg-pink-600 text-white">
        <div className="navbar md:flex md:justify-between">
          <div className="text-xl font-extrabold flex justify-between">
            <h1 className='navbar-brand'>Movie App</h1>
            <button className='md:hidden' onClick={handleShowNav}><BsListUl/></button>
          </div>
          <div id='navbarList' className='navbar-list mt-3 md:mt-0 font-semibold hidden md:block'>
            <ul className='md:flex'>
              <li className='mb-2 md:mx-3 hover:text-blue-300'><Link to="/">Home</Link></li>
              <li className='mb-2 md:mx-3 hover:text-blue-300'><Link to="/movie/create">Add Movie</Link></li>
              <li className='mb-2 md:mx-3 hover:text-blue-300'><Link to="/movie/popular">Popular</Link></li>
              <li className='mb-2 md:mx-3 hover:text-blue-300'><Link to="/movie/now">Now Playing</Link></li>
              <li className='mb-2 md:mx-3 hover:text-blue-300'><Link to="/movie/top">Top Rated</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}
