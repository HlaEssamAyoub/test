import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div style={{display:"flex",justifyContent:"space-evenly",backgroundColor:"yellowgreen",padding:"5px"}}>
            <Link to='/'>Home</Link>
            <Link to='/movies'>Movies</Link>
            <Link to='/movies/add'>AddMovies</Link>
            <Link to='/moviesdetails'>MoviesDetails</Link>
            <Link to='/delete'>Delete</Link>
            <Link to='/canclhrc'>NotFound</Link>


        </div>
    );
};

export default Header;