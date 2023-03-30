import React from 'react';

const SingleCard = ({movie,handleWatchTime}) => {
   
    return (
        <div className="movie-card card col-md-6 ">
        <div className="movie-poster m-auto w-50">
            <img className='w-75' src={movie.poster} alt="" />

        </div>
        <h3>Movie name : {movie.movieName} </h3>
        <p>Description: {movie.description}</p>
        <div className=' timeRating d-flex justify-content-around'>
            <p>Watch time: {movie.watchTime}</p>
            <p>Rating: {movie.imdbRating}</p>
           
        </div>
        <button onClick={()=>handleWatchTime(movie.watchTime)} className=' btn btn-info w-75 m-auto' >Book Now</button>
    </div>
    );
};

export default SingleCard;