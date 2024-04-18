import React from 'react'
import Header from './Header';
import { useEffect } from 'react';
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Container from './Container.js';
import MovieContainer from "./MovieContainer.js";
import useNowPlayingMovies from '../hooks/useNowPlayingMovies.js';
import usePopularMovies from "../hooks/usePopularMovies.js";
import useTopRated from "../hooks/useTopRated.js";
import useUpcomingMovie from '../hooks/useUpcomingMovie.js';
import SearchMovie from './SearchMovie.js';

const Browse = () => {

  const user = useSelector(store => store.app.user);
  const toggle = useSelector(store => store.movie.toggle);
  const navigate = useNavigate();
  // const dispatch=useDispatch();



  useNowPlayingMovies();
  usePopularMovies();
  useTopRated();
  useUpcomingMovie();


  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  });



  return (
    <div>
      <Header />
      <div>{
        toggle ? <SearchMovie /> : 
        (
          <>
            <Container />
            <MovieContainer />
         </>
        )
      }


      </div>
    </div>
  )
}

export default Browse;