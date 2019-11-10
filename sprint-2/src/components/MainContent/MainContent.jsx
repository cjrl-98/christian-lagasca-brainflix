import React from 'react';
import axios from 'axios';

import './MainContent.scss'

// import data from '../../Assets/Data/data';
import VideoPlayer from '../VideoPlayer/VideoPlayer';
import Description from '../Description/Description';
import NextVideoContainer from '../NextVideoContainer/NextVideoContainer';
import profilePic from "../../Assets/Images/Mohan-muruge.jpg";

export default class MainContent extends React.Component {
    state= {
        videoList: [],
    }

    api_key = '?api_key=c8e6f44e-1121-41f8-adef-3f6c22bdfe01';
    url = 'https://project-2-api.herokuapp.com/';
    videosLink = 'videos';
    componentIsMounted = false;

    async getVideos(id) {
        try{
            let response = await axios.get(`${this.url}${this.videosLink}${this.api_key}`);
            let fetchedMainVideo = await axios.get(`${this.url}${this.videosLink}/${id}${this.api_key}`);
            if (this.componentIsMounted) {
                this.setState({
                    videoList: await response.data,
                    mainVideo: await fetchedMainVideo.data
                })
            }
        }
        catch(error) {
            alert(error);
        }
    }

    componentDidMount() {
       this.componentIsMounted = true;
       console.log('component did mount')
       this.getVideos(this.props.videoId);
    }
    componentDidUpdate() {
        console.log('component did update')
        if(this.props.videoId !== this.state.mainVideo.id){this.getVideos(this.props.videoId)}
    }
    componentWillUnmount() {
        console.log('component did unmount')
        this.componentIsMounted = false;
      }
    
    
    render(){    
        const updatedVideoList = !this.state.videoList ? null : this.state.videoList.filter(video => video.id !== this.state.mainVideo.id);
        return(
            <React.Fragment>
                    <div className="main-content">
                        <VideoPlayer mainVideo={this.state.mainVideo}/>
                        <div className="main-content__description-container">
                           <Description descriptionObject={this.state.mainVideo} channelImg={profilePic}/>
                           <NextVideoContainer videoList={updatedVideoList}/>
                        </div>
                    </div>
            </React.Fragment>
        );
    }
}