import { Link } from "react-router-dom";
import Card from "./Card";
import { useState, useEffect } from 'react';
import * as MoviesAPI from "../MoviesAPI"

const Home = ({updateFav, fav}) => {

  const  [top, setTop]=useState([]);
  const  [up, setUp]=useState([]);
  const  [now, setNow]=useState([]);
  const  [movies, setMovies]=useState([]);
  const[query, setQuery]= useState("");

  const updateQuery = (q)=>{
    setQuery(q.trim())
  };

  useEffect (()=>{
    if (query&&query!==""){
      const getSearch= async()=>{
      const res = await MoviesAPI.search(query);
      setMovies(res)
    }
    getSearch()
  }
  },[query])
    
  useEffect(()=>{
    const getTop = async()=>{
        const resT=await MoviesAPI.topRated();
        const resU=await MoviesAPI.upComing();
        const resN=await MoviesAPI.nowPlaying();
        setTop(resT)
        setUp(resU)
        setNow(resN)
        setMovies(resT)
    }
    getTop();
  },[]);

  const subChange = (aa, a, b, c)=>{
    setMovies(aa)
    a.classList.add("active");
    b.classList.remove("active");
    c.classList.remove("active");
  }

  const changeList = (el)=> {
    const topM = document.getElementById("top")
    const upM = document.getElementById("up")
    const nowM = document.getElementById("now")
    
    switch (el.id) {
      case "top":
        subChange(top, topM, upM, nowM);
        break
      case "up":
        subChange(up, upM, topM, nowM);
        break
      case "now":
        subChange(now, nowM, topM, upM);
        break
      case "search":
        setMovies([])
        topM.classList.remove("active");
        upM.classList.remove("active");
        nowM.classList.remove("active");
        break
    }
  }

  return (
    <div>
        <div className='header'>
            <div className='image'>
                <img src={'https://cdn.mos.cms.futurecdn.net/D7uJxevNuYTHNmcuFoNVXT.jpg'}></img>
            </div>
            <div className='in'>
                <input id="search" type="text" placeholder="Search by name" onFocus={e=>changeList(e.target)}
                onChange={e=>updateQuery(e.target.value)}></input>
            </div>
            <button className="tohome"><Link to="/favorites" className="toh">Favorites</Link></button>
        </div>
        <ul>
          <li id='top' className="active" onClick={e=>changeList(e.target)}>Top Rated</li>
          <li id='up' onClick={e=>changeList(e.target)}>Upcoming</li>
          <li id='now' onClick={e=>changeList(e.target)}>Now Playing</li>
        </ul>
        <Card movieList={movies} updateFav={updateFav} fav={fav}/>
    </div>
  )
}

export default Home;