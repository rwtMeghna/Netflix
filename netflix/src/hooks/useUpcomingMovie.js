import axios from "axios"
import { getUpcomingMovie } from "../Components/redux/movieSlice";
import {Upcoming_Movie,options} from "../utils/constant.js"
import { useDispatch } from "react-redux";


const useUpcomingMovie =async () => {
    const dispatch=useDispatch();
   try {
      const res=await axios.get(Upcoming_Movie,options);
    dispatch(getUpcomingMovie(res.data.results));
   } catch (error) {
    
   }
}

export default useUpcomingMovie;