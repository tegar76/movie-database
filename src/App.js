import { Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout/Layout';
import Home from './pages/Home';
import Create from './pages/Movie/Create';
import Detail from './pages/Movie/Detail';
import NowPlaying from './pages/Movie/NowPlaying';
import Popular from './pages/Movie/Popular';
import TopMovie from './pages/Movie/TopMovie';

function App() {
    // Membuat variabel state movies
  // state mengembalikan 2 data yaitu nilai saat ini(get) dan fungsi untuk mengubah (set nilai baru)
  // state digunakan untuk merender ulang item yang ditambahkan (akan diupdate langsung)

  return (
    <div className="App font-Montserrat">
      <Layout>
        <Routes>
          <Route path='/' element = {<Home/>}/>
          <Route path='/movie/create' element = {<Create/>}/>
          <Route path='/movie/popular' element = {<Popular/>}/>
          <Route path='/movie/now' element = {<NowPlaying/>}/>
          <Route path='/movie/top' element = {<TopMovie/>}/>
          <Route path='/movie/:id' element = {<Detail/>}/>
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
