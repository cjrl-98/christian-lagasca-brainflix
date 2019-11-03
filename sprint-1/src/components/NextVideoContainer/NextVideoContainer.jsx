import React from 'react';
import NextVideoCard from '../NextVideoCard/NextVideoCard';
import './NextVideoContainer.scss'



const NextVideoContainer = (props) => {
    const nextVideoList  = props.videoList.map((video) =>
        <NextVideoCard 
        title = {video.title}
        channel = {video.channel}
        img = {video.image}
        key={video.id}
        />
    );
  return (
    <div className="next-video__container">
        <p className="next-video__title label">NEXT VIDEO</p>
        {nextVideoList}
    </div>
  );
}

export default NextVideoContainer;