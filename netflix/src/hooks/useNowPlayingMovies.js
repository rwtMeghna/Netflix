import axios from "axios";
import {getPlayingMovies} from "../Components/redux/movieSlice.js"
import {Now_Playing_Movie , options} from "../utils/constant.js"
import { useDispatch } from "react-redux";



const useNowPlayingMovies = async()=>{

    const dispatch=useDispatch();

    try {
        const res=await axios.get(Now_Playing_Movie , options)
        console.log( res.data.results)
        dispatch(getPlayingMovies(res.data.results));
  
    } catch (error) {
        console.log(error)
    }
  }

  export default useNowPlayingMovies;