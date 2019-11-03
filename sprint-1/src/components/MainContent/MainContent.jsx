import React from 'react';
import './MainContent.scss'
import data from '../../Assets/Data/data';
import Header from '../Header/Header'
import VideoPlayer from '../VideoPlayer/VideoPlayer';
import Description from '../Description/Description';
import NextVideoContainer from '../NextVideoContainer/NextVideoContainer';
import brainFlixLogo from '../../Assets/Logo/Logo-brainflix.svg';
import profilePic from "../../Assets/Images/Mohan-muruge.jpg";


class MainContent extends React.Component {
    state= {
        videoList: data.videoList,
        mainVideo: data.mainVideo,
    }
    
    render(){
        const updatedVideoList = this.state.videoList.filter(video => video.id !== this.state.mainVideo.id );
        return (
            <React.Fragment>
                <Header logoImg={brainFlixLogo} profilePic={profilePic}/>
                <div className="main-content">
                    <VideoPlayer/>
                    <div className="main-content__description-container">
                        <Description descriptionObject={this.state.mainVideo} channelImg={profilePic}/>
                        <NextVideoContainer videoList={updatedVideoList}/>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default MainContent;