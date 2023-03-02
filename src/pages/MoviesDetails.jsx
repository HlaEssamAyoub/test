import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
const MoviesDetails = () => {
    const {Id} = useParams()
    const [movie,setMovie] = useState(null)
    console.log(Id)
    useEffect(()=>{
        axios.get(`https://api.themoviedb.org/3/movie/${Id}?api_key=9813ce01a72ca1bd2ae25f091898b1c7`)
        .then(res=>setMovie(res.data))
    },[])
    if(!movie){
        return <h1>loading...</h1>
    }
    return (
        <div>
            <h1>{movie.title}</h1>
        </div>
    );
};

export default MoviesDetails;