import React from 'react';

import IconFullscreen from '../../Assets/Icons/SVG/Icon-fullscreen.svg';
import IconPlay from '../../Assets/Icons/SVG/Icon-play.svg';
import IconVolume from '../../Assets/Icons/SVG/Icon-volume.svg';


import './VideoController.scss';

class VideoController extends React.Component{
    render(){
        return(
            <div className="player__controller-container">
                <div className="player">
                    <button className="player__play-btn"><img src={IconPlay} className="player__btn player__play-icon" alt="play icon"></img></button>
                    <div className="player__controller-center">
                        <div className="player__scrubber">
                        </div>
                        <div className="player__duration">
                            <p><span>0:00</span> / <span>{this.props.duration}</span></p>
                            
                        </div>
                    </div>
                    <div className="player__controller-right">
                        <button className="player__fullscreen-btn"><img src={IconFullscreen} className="player__fullscreen-icon" alt="fullscreen icon"></img></button> 
                        <button className="player__volume-btn"> <img src={IconVolume} className="player__volume-icon" alt="volume icon"></img></button> 
                    </div>
                </div>
            </div>
        );
    }
}

export default VideoController;