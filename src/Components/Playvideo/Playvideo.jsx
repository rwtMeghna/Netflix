import React from 'react'
import "./Playvideo.css"
import video1 from "../../assets/video.mp4";
import like from "../../assets/like.png"
import share from "../../assets/share.png"
import dislike from "../../assets/dislike.png"
import save from "../../assets/save.png"
import jack from "../../assets/jack.png"
import profile from "../../assets/user_profile.jpg";




const Playvideo = () => {
    return (
        <div className='play-video'>
            <video src={video1} controls autoPlay muted></video>
            <h3>Best channel to learn web </h3>
            <div className="play-video-info">
                <p>2882 views &bull; 2 days ago</p>

                <div>
                    <span><img src={like} alt="" />125</span>
                    <span><img src={dislike} alt="" />4</span>
                    <span><img src={share} alt="" />Share</span>
                    <span><img src={save} alt="" />SAVE</span>
                </div>
            </div>
            <hr />
            <div className="publisher">
                <img src={jack} alt="" />
                <div>
                    <p>Great Stack</p>
                    <span>1M</span>
                </div>


                <div>
                    <button>Subscribe</button>
                </div>
            </div>

            <div className="video-desc">
                <p>Channel that makes learning easy</p>
                <p>Subscribe and watch more tutorials on web devlopment</p>
                <hr />
                <h4>130 Comments</h4>

                <div className="comment">

                    <img src={profile} alt="" />
                    <div>
                        <h3>MEGHA Rawat <span>1 days ago</span></h3>

                        <p>my name is .....</p>

                        <div className="comment-action">
                            <img src={like} alt="" />
                            <span>244</span>
                            <img src={dislike} alt="" />
                            <span>30</span>
                        </div>
                    </div>
                </div>

                <div className="comment">

                    <img src={profile} alt="" />
                    <div>
                        <h3>MEGHA Rawat <span>1 days ago</span></h3>

                        <p>my name is .....</p>

                        <div className="comment-action">
                            <img src={like} alt="" />
                            <span>244</span>
                            <img src={dislike} alt="" />
                            <span>30</span>
                        </div>
                    </div>
                </div>

                <div className="comment">

                    <img src={profile} alt="" />
                    <div>
                        <h3>MEGHA Rawat <span>1 days ago</span></h3>

                        <p>my name is .....</p>

                        <div className="comment-action">
                            <img src={like} alt="" />
                            <span>244</span>
                            <img src={dislike} alt="" />
                            <span>30</span>
                        </div>
                    </div>
                </div>

                <div className="comment">

                    <img src={profile} alt="" />
                    <div>
                        <h3>MEGHA Rawat <span>1 days ago</span></h3>

                        <p>my name is .....</p>

                        <div className="comment-action">
                            <img src={like} alt="" />
                            <span>244</span>
                            <img src={dislike} alt="" />
                            <span>30</span>
                        </div>
                    </div>
                </div>

                <div className="comment">

                    <img src={profile} alt="" />
                    <div>
                        <h3>MEGHA Rawat <span>1 days ago</span></h3>

                        <p>my name is .....</p>

                        <div className="comment-action">
                            <img src={like} alt="" />
                            <span>244</span>
                            <img src={dislike} alt="" />
                            <span>30</span>
                        </div>
                    </div>
                </div>

                <div className="comment">

                    <img src={profile} alt="" />
                    <div>
                        <h3>MEGHA Rawat <span>1 days ago</span></h3>

                        <p>my name is .....</p>

                        <div className="comment-action">
                            <img src={like} alt="" />
                            <span>244</span>
                            <img src={dislike} alt="" />
                            <span>30</span>
                        </div>
                    </div>
                </div>

                <div className="comment">

                    <img src={profile} alt="" />
                    <div>
                        <h3>MEGHA Rawat <span>1 days ago</span></h3>

                        <p>my name is .....</p>

                        <div className="comment-action">
                            <img src={like} alt="" />
                            <span>244</span>
                            <img src={dislike} alt="" />
                            <span>30</span>
                        </div>
                    </div>
                </div>

                <div className="comment">

                    <img src={profile} alt="" />
                    <div>
                        <h3>MEGHA Rawat <span>1 days ago</span></h3>

                        <p>my name is .....</p>

                        <div className="comment-action">
                            <img src={like} alt="" />
                            <span>244</span>
                            <img src={dislike} alt="" />
                            <span>30</span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Playvideo