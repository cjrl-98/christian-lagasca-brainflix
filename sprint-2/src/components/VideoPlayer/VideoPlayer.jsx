import React from 'react';
import VideoController from '../VideoController/VideoController';
import './VideoPlayer.scss';


export default class VideoPlayer extends React.Component{
    render(){
        if(!this.props.poster){
            return null
        }
        const poster = this.props.poster.image
        return(
            <React.Fragment>
                <div className="player__container">
                    <div className="player__current-vid-container">
                        <video className="player__current-vid" poster={poster}>
                        </video> 
                        <VideoController/>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

