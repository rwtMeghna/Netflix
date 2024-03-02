import React from 'react'
import "./Sidebar.css";
import Home from "../../assets/home.png";
import game_icon from "../../assets/game_icon.png";
import automobiles from "../../assets/automobiles.png"
import sport from "../../assets/sports.png";
import entertainmnt from "../../assets/entertainment.png"
import tech from "../../assets/tech.png";
import music from "../../assets/music.png"
import blogs from "../../assets/blogs.png";
import news from "../../assets/news.png";
import jack from "../../assets/jack.png"
import simon from "../../assets/simon.png"
import tom from "../../assets/tom.png"
import megan from "../../assets/megan.png"
import cameron from "../../assets/cameron.png";



function Sidebar({sidebar}) {
  return (
    <div className={`sidebar ${sidebar?"":"small-sidebar"}`}>
        <div className="shortcut-link">
            <div className="side-link">
                <img src={Home} alt="" /><p>Home</p>
            </div>
      
            <div className="side-link">
                <img src={game_icon} alt="" /><p>Gaming</p>
            </div>

            <div className="side-link">
                <img src={automobiles} alt="" /><p>Automoblies</p>
            </div>
            <div className="side-link">
                <img src={sport} alt="" /><p>Sports</p>
            </div>
            <div className="side-link">
                <img src={entertainmnt} alt="" /><p>Entertainment</p>
            </div>
            <div className="side-link">
                <img src={tech} alt="" /><p>Technology</p>
            </div>
            <div className="side-link">
                <img src={music} alt="" /><p>Music</p>
            </div>
            <div className="side-link">
                <img src={blogs} alt="" /><p>Blogs</p>



            </div>
            <div className="side-link">
                <img src={news} alt="" /><p>News</p>
            </div>

            <hr />

        </div>

        <div className="subscribe-list">
            <h3>Subscribed</h3>
            <div className="side-link">
                <img src={jack} alt="" /><p>Pewedie</p>
            </div>

            <div className="side-link">
                <img src={simon} alt="" /><p>Pewedie</p>
            </div>
            <div className="side-link">
                <img src={megan} alt="" /><p>Pewedie</p>
            </div>

            <div className="side-link">
                <img src={cameron} alt="" /><p>Pewedie</p>
            </div>
            <div className="side-link">
                <img src={tom} alt="" /><p>Pewedie</p>
            </div>
        </div>
    </div>
  )
}

export default Sidebar