import React , {useEffect, useRef, useState} from 'react'
import './TitleCards.css'
import cards_data from '../../assets/cards/cards_data'
import { Link } from 'react-router-dom'

const TitleCards = ({title, category}) => {
const [apiData, setApiData] = useState([]);
const cardsRef = useRef();
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MDExNjRmZDU2ZTRhMzNiZDRhNmM0Y2QwMDRlN2NhYyIsIm5iZiI6MTc1MTgzMjIwMS4yNDk5OTk4LCJzdWIiOiI2ODZhZDY4OTBhMmVhNDc3ODM1MWRiYWIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.V3_mjHF6E7LzVlGFfwYI-u1Hml45EAt-ZnMmCtuoulc'
  }
};




const handleWheel = (event) => {
    event.preventDefault();
    cardsRef.current.scrollLeft += event.deltaY;
}
useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`, options)
  .then(response => response.json())
  .then(response => setApiData(response.results))
  .catch(err => console.error(err));
    cardsRef.current.addEventListener('wheel', handleWheel);
}, []);

  


  return (
      <div className='title-cards'>
            <h2> {title?title:"Popular on Netflix"}</h2>
            <div className="card-list" ref={cardsRef}  >
                {
                    apiData.map((card, index) => {
                        return <Link to={`/player/${card.id}`}  className='card' key={index}>
                            <img src={`https://image.tmdb.org/t/p/w500`+card.backdrop_path} alt=""/>

                            
                            <p>{card.original_title}</p>
                        </Link>
                    })
                }
            </div>
        </div>
    )
}

export default TitleCards
