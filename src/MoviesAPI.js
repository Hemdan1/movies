import axios from "axios";

const tmdb = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    headers: {
        accept: "application/json"
    },
    params: {
        api_key: "e8f9eed874e5ee3c48142cfada48769c"
    }
})

export const topRated = ()=> 
    tmdb.get("movie/top_rated")
    .then(res=>res.data.results)

export const upComing = ()=> 
    tmdb.get("movie/upcoming")
    .then(res=>res.data.results)

export const nowPlaying = ()=> 
    tmdb.get("movie/now_playing")
    .then(res=>res.data.results)

export const search = (query)=> 
    axios.get(`https://api.themoviedb.org/3/search/movie?api_key=e8f9eed874e5ee3c48142cfada48769c&language=en-US&page=1&query=${query}`)
    .then(res=>res.data.results)
    
export const getBook = id=>tmdb.get(`movie/${id}`);