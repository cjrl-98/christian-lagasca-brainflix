import React from 'react';

import './NextVideoCard.scss';

const NextVideoCard = (props) => {
    return(
        <a href="/" className='video-card'>
            <img className="video-card__img" src={props.img} alt={props.title}/>
            <div className="video-card__description">
                <p className="video-card__title">{props.title}</p>
                <p className="video-card__channel">{props.channel}</p>
            </div>
        </a>
    );
}

export default NextVideoCard;
