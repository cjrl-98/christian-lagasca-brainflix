import React from 'react';
import axios from 'axios';

import './MainContent.scss'

// import data from '../../Assets/Data/data';
import Header from '../Header/Header'
import VideoPlayer from '../VideoPlayer/VideoPlayer';
import Description from '../Description/Description';
import NextVideoContainer from '../NextVideoContainer/NextVideoContainer';
import brainFlixLogo from '../../Assets/Logo/Logo-brainflix.svg';
import profilePic from "../../Assets/Images/Mohan-muruge.jpg";

const api_key = '?api_key=c8e6f44e-1121-41f8-adef-3f6c22bdfe01';
const url = 'https://project-2-api.herokuapp.com/';
const videosLink = 'videos';
// console.log(`url${videosLink}${api_key}`);

class MainContent extends React.Component {

    state= {
        videoList: [],
        homeMainVideoId: 0,
    }
    async getVideos() {
        try{
            let response = await axios.get(`${url}${videosLink}${api_key}`);
            let mainVideo = await axios.get(`${url}${videosLink}/${response.data[0].id}${api_key}`);
            this.setState({
                videoList: response.data,
                mainVideo: mainVideo.data
            })
        }
        catch(err) {
                alert(err);
        }
    }
    componentDidMount() {
       this.getVideos();
    }
    render(){    
        const updatedVideoList = !this.state.videoList ? null : this.state.videoList.filter(video => video.id !== this.state.mainVideo.id);
        return(
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