import axios from "axios"
import {Top_Rated_Movie , options} from "../utils/constant.js"
import { useDispatch } from "react-redux"
import {getTopRatedMovie} from "../Components/redux/movieSlice.js" 

const useTopRated = async() => {
    const dispatch =useDispatch();

 try {

    const res=await axios.get(Top_Rated_Movie , options)
      dispatch(getTopRatedMovie(res.data.results));
 } catch (error) {
    console.log(error)
 }
}

export default useTopRated