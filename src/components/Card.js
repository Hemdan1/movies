const Card = ({movieList, updateFav, fav}) => {

    const getPP = (posterPath)=>`https://www.themoviedb.org/t/p/w220_and_h330_face${posterPath}`;

    const comp = m=>{
       const found = fav.find(f=>f.id===m.id);
       return found?"red":"white";
    }

    return (
     <ol className="movies-grid">
        {
            movieList&&movieList.map((movie)=>(
                <li key={movie.id}>
                    <div className='fav' onClick={(e)=>updateFav(movie, e.target)}>
                        <i className="fa-solid fa-heart" style={{color:`${comp(movie)}`}}></i>
                    </div>
                    <div className="movie">
                        {/* <div className="cover" style={{width:200, height:300,
                            backgroundImage:`url(${getPP(movie.poster_path)})`}}></div> */}
                        <img className="cover" src={`${getPP(movie.poster_path)}`}></img>
                        <div className="data">
                            <h4 className="title"> {movie.title} </h4>
                            <p className="date"> {movie.release_date} </p>
                        </div>
                    </div>
                </li>
            ))
        }
    </ol>)
}

export default Card