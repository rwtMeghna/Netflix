import React from 'react'
import useMoviesById from "../hooks/useMoviesById.js"
import { useSelector } from 'react-redux';

const VideoBackground = ({movieId , bool}) => {
  const trailerMovie = useSelector(store=>store.movie.trailerMovie);

  useMoviesById(movieId);



  return (
    <div className='w-[vw] overflow-hidden'>
      <iframe
                className={`${bool ? "w-[100%]" : "w-screen aspect-video" }`}
                src={`https://www.youtube.com/embed/${trailerMovie?.key}?si=HorxQfzFY2_TAO1W&autoplay=1&mute=0`}
                title="YouTube video player"
                frameBorder="0"
                allowFullScreen>
            </iframe>
    </div>
  )
}

export default VideoBackground