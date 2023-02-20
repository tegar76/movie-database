const API_KEY = process.env.REACT_APP_API_KEY

const BASE_URL = `https://api.themoviedb.org/3`

const ENDPOINTS = {
    popular: `${BASE_URL}/movie/popular?api_key=${API_KEY}`,
    nowPlaying: `${BASE_URL}/movie/now_playing?api_key=${API_KEY}`,
    topMovie: `${BASE_URL}/movie/top_rated?api_key=${API_KEY}`,
    hero: `${BASE_URL}/trending/all/day?api_key=${API_KEY}`,
    detail(id){
        return `${BASE_URL}/movie/${id}?api_key=${API_KEY}&append_to_response=videos`
    },
    Recommendations(id) {
        return `${BASE_URL}/movie/${id}/recommendations?api_key=${API_KEY}`
    },
}

export default ENDPOINTS