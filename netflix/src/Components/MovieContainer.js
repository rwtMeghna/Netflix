import React from 'react'
import MovieList from './MovieList.js'
import { useSelector } from 'react-redux';


const MovieContainer = () => {

  const movie = useSelector(store=>store.movie);
  console.log(movie)
  return (
    <div className='bg-black'>
      <div className='-mt-52 relative z-10' >
        <MovieList title={"Popular Movies"} movies={movie.popularMovie}/>
        <MovieList title={"Now Playing Movies"} movies={movie.nowPlayingMovies}/>
        <MovieList title={"Top Rated Movies"} movies={movie.topRatedMovie}/>
        <MovieList title={"Upcoming Movies"} movies={movie.upComingMovies}/>
      </div>
    </div>
  )
}

export default MovieContainer;