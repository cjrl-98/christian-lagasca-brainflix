import React from 'react';

import './VideoPlayer.scss';
//upload data from here and then pass it  
import currentVideoPoster from '../Assets/Images/video-list-0.jpg'
import IconFullscreen from '../Assets/Icons/SVG/Icon-fullscreen.svg';
import IconPlay from '../Assets/Icons/SVG/Icon-play.svg';
import IconScrubber from '../Assets/Icons/SVG/Icon-scrubber-control.svg';
import IconVolume from '../Assets/Icons/SVG/Icon-volume.svg';

class VideoPlayer extends React.Component{
    render(){
        return(
            <React.Fragment>
                <div className="player__container">
                    <div className="player__current-vid-container">
                                {/* <img className="player__current-vid"  src={currentVideo} alt="Current Video Playing"/> */}
                                <video className="player__current-vid">
                                </video> 
                            <div className="player__controller-container">
                                <div className="player__controller">
                                    <button className="player__play-btn"><img src={IconPlay} className="player__btn player__play-icon" alt="play icon"></img></button>
                                    <div className="player__controller-center">
                                       <div className="player__scrubber"></div>
                                    </div>
                                    <div className="player__controller-right">
                                        <button className="player__fullscreen-btn"><img src={IconFullscreen} className="player__fullscreen-icon" alt="fullscreen icon"></img></button> 
                                        <button className="player__volume-btn"> <img src={IconVolume} className="player__volume-icon" alt="volume icon"></img></button> 
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default VideoPlayer;