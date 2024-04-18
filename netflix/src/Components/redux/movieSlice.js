import { createSlice } from "@reduxjs/toolkit";


const movieSlice=createSlice({
    name:"movie",
    initialState:{
        nowPlayingMovies:null,
        popularMovie:null,
        topRatedMovie:null,
        upComingMovies:null,
        toggle:false,
        trailerMovie:null, 
        open:false,
        id:"",
    },
    reducers:{
        getPlayingMovies:(state , action)=>{
            state.nowPlayingMovies=action.payload
        },
        getPopularMovie:(state , action)=>{
            state.popularMovie=action.payload
        },
        getTopRatedMovie:(state , action)=>{
            state.topRatedMovie=action.payload;
        },
        getUpcomingMovie:(state ,action)=>{
            state.upComingMovies=action.payload
        },
        setToggle:(state)=>{
           state.toggle=!state.toggle;
        },
         setOpen:(state,action)=>{
            state.open = action.payload;
        },
        getId:(state,action)=>{
            state.id = action.payload;
        },
        getTrailerMovie:(state , action)=>{
            state.trailerMovie=action.payload;
        }
    }
});

export const {getPlayingMovies , getPopularMovie,getTopRatedMovie,getUpcomingMovie,setOpen,getId,setToggle,getTrailerMovie}=movieSlice.actions;
export default movieSlice.reducer;