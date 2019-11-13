import React from 'react';
import VideoController from '../VideoController/VideoController';
import './VideoPlayer.scss';


export default class VideoPlayer extends React.Component{
    render(){
        if(!this.props.mainVideo){
            return null
        }
        return(
            <React.Fragment>
                <div className="player__container">
                    <div className="player__current-vid-container">
                        <video className="player__current-vid" poster={this.props.mainVideo.image}>
                        </video> 
                        <VideoController duration={this.props.mainVideo.duration}/>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

