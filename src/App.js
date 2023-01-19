import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from "./components/Home";
import Favorites from "./components/Favorites";
import * as MoviesAPI from "./MoviesAPI";
import { useState, useEffect } from 'react';

function App() {
  const [fav, setFav]=useState([]);
  const wind = window.localStorage;

  const updateFav=(par, el)=>{
    if (!wind.getItem(`${par.id}`)){
      setFav(fav.concat(par));
      wind.setItem(`${par.id}`,par);
    } else {
      setFav(fav.filter(f=>f.id!==par.id));
      wind.removeItem(`${par.id}`);
    }
  }
//window.localStorage.clear()
  useEffect(()=>{
    if(wind.length>0){
      const getFav = async()=>{
        const local=[]; 
        for(let i=0; i<wind.length; i++){
          const res = await MoviesAPI.getBook(+wind.key(i))
          local.push(res.data);
        }
        setFav(local)
        console.log(local)
      }
      getFav();
    }
  },[])

  return (
    <div>
      
      <div className='container'>
        
        <Routes>
          <Route exact path="/" element={<Home updateFav={updateFav} fav={fav}/>}/>
          <Route path="/favorites" element={<Favorites updateFav={updateFav} fav={fav}/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
