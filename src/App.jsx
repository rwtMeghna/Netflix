import React from "react"
import { useState } from "react";
import Navbar from "./Components/Navbar/Navbar"

import{Routes ,Route} from "react-router-dom";
import Video from "./Pages/Video/Video.jsx";
import Home from "./Pages/Home/Home.jsx";

function App() {

  const [sidebar , setSidebar]=useState(true);
  return (
    <div>
      <Navbar setSidebar={setSidebar}/>
      <Routes>
<Route path="/" element={<Home sidebar={sidebar}/>}/>
<Route path="/video/:categoryid/:videoId" element={<Video/>} />
      </Routes>

    </div>
  )
}

export default App