import React from 'react';
import './MainContent.scss'
import data from '../../Assets/Data/data';
import Header from '../Header/Header'
import VideoPlayer from '../VideoPlayer/VideoPlayer';
import Description from '../Description/Description';
import NextVideoContainer from '../NextVideoContainer/NextVideoContainer';

class MainContent extends React.Component {
    render(){
        return (
            <React.Fragment>
                <Header/>
                <div className="main-content">
                    <VideoPlayer/>
                    <div className="main-content__description-container">
                        <Description descriptionObject={data.mainVideo}/>
                        <NextVideoContainer videoList={data.videoList}/>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default MainContent;

// 68*4 = 272
// 24*3 = 72

// 68*6 = 340 
// 24*5 = 120
// 460 = description-text-long

//68*8 544
//24*7 168


//68 * 4 272
//24 * 3 