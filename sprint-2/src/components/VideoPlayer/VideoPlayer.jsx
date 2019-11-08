import React from 'react';
import VideoController from '../VideoController/VideoController';
import './VideoPlayer.scss';
import currentVideoPoster from '../../Assets/Images/video-list-0.jpg';


class VideoPlayer extends React.Component{
    render(){
        return(
            <React.Fragment>
                <div className="player__container">
                    <div className="player__current-vid-container">
                        <video className="player__current-vid" poster={currentVideoPoster}>
                        </video> 
                        <VideoController/>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default VideoPlayer;