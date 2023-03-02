import React, { useEffect, useState } from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';
const Movies = () => {
    const [movies,setMovies] = useState(null)
    useEffect(()=>{
     axios.get('https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=9813ce01a72ca1bd2ae25f091898b1c7')
     .then(res=>setMovies(res.data.results))
    },[])
    if(!movies){
        return <h1>loading...</h1>
    }
    return (
         <div>
            {movies.map(movie=><div>
                <h1>Film title:{movie.title}</h1>
                <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}/>
                <br></br>
                <Link to={`/moviesdetails/${movie.id}`}><button>details</button></Link>
                </div>)}
         </div>
      )
        
    
};

export default Movies;