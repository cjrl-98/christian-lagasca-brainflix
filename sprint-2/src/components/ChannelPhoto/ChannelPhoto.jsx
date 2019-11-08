import React from 'react';
import './ChannelPhoto.scss';

const ChannelPhoto = props => {
    return (
        <div className={`channel__img-container ${props.className}`}><img className="channel__img" src={props.channelImg} alt={props.alt}/></div>
    );
}

export default ChannelPhoto;

