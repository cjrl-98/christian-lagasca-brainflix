import React from 'react';

import './Description.scss';

import viewsIcon from '../../Assets/Icons/SVG/Icon-views.svg';
import likesIcon from '../../Assets/Icons/SVG/Icon-likes.svg';

import CommentsContainer from '../CommentsContainer/CommentsContainer';

const Description = props => {
        const {title, description, channel,
            views,likes,timeStamp,comments}= props.descriptionObject;
        
        return(
            <section className="description">
                <div className="description__container">
                    <h1 className="description__title">{title}</h1>
                    <div className="description__labels">
                        <div className="description__text-container description__uploader-container">
                            <p className="description__uploader">By {channel}</p>
                            <p className="description__text">{timeStamp}</p>
                        </div>
                        <div className="description__text-container description__text--stats">
                            <div className="description__text-container description__views-container">
                                <img className="description__views-icon" src={viewsIcon} alt="views icon"/>
                                <p className="description__text">{views}</p>
                            </div>
                            <div className="description__text-container">
                                <img className="description__likes-icon" src={likesIcon} alt="likes icon"/>
                                <p className="description__text">{likes}</p>
                            </div>
                        </div>
                    </div>
                    <hr className="hr-divider"/>
                    <p className="description__text description__text--long">{description}</p>
                </div>
                <CommentsContainer numComments={comments.length}/>
            </section>
        );
    }


export default Description;