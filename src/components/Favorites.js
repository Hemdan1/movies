import Card from "./Card";
import { Link } from "react-router-dom";
const Favorites = ({updateFav, fav}) => {

    return (
        <div>
            <div className='header'>
                <div className='image'>
                    <img src={'https://cdn.mos.cms.futurecdn.net/D7uJxevNuYTHNmcuFoNVXT.jpg'}></img>
                </div>
                <button className="tohome"><Link to="/" className="toh">Go Home</Link></button>
            </div>
            <Card movieList={fav} updateFav={updateFav} fav={fav}/>
        </div>
      )
}

export default Favorites;