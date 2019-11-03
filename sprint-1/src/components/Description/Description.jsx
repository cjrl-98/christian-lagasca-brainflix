import React from 'react';

import './Description.scss';

import viewsIcon from '../../Assets/Icons/SVG/Icon-views.svg';
import likesIcon from '../../Assets/Icons/SVG/Icon-likes.svg';

import CommentsContainer from '../CommentsContainer/CommentsContainer';

const Description = props => {
        const {title, description, channel,
            views,likes,timestamp,comments}= props.descriptionObject;
        const calculateTimeStamp = timeStamp => { // function to calculate time stamp based on passed timestamp
            let newDate = new Date();  //construct a new date object to act 
            let seconds = (newDate.getTime() - timeStamp) / 1000;  // return the milliseconds since 1970/01/01 and substract it with the passed date object
            let weeks = (seconds / 604800);     // converts seconds to weeks to a local fucntion variable for easier reference
            let months = (weeks / 4.35);
            if (seconds < 60) { //check if the difference is seconds from the passed object and current timeStamp is within secs / minutes / hours and 
                let timeStampString = Math.ceil(seconds);
                if (timeStampString < 2) {
                    return timeStampString + ' second ago';
                } else {
                    return timeStampString + ' seconds ago';
                }
            }
            if (seconds < 3600) {
                let timeStampString = Math.floor(seconds / 60); //rounds it down to the nearest integer
                if (timeStampString < 2) {
                    return timeStampString + ' minute ago';
                } else {
                    return timeStampString + ' minutes ago';
                }
            }
            if (seconds < 86400) {
                let timeStampString = Math.floor(seconds / 3600);
                if (timeStampString < 2) {
                    return timeStampString + ' hour ago';
                } else {
                    return timeStampString + ' hours ago';
                }
            }
            if (seconds < 604800) {
                let timeStampString = Math.floor(seconds / 86400);
                if (timeStampString < 2) {
                    return Math.ceil(timeStampString) + ' day ago';
                } else {
                    return Math.ceil(timeStampString) + ' days ago';
                }
            }
            if (weeks < 4.345) {
                if (weeks < 2) {
                    return Math.floor(weeks) + ' week ago';
                } else {
                    return Math.floor(weeks) + ' weeks ago';
                }
            }
            if (weeks < 53) {
                if (months < 2) {
                    return Math.floor(months) + ' month ago';
                } else {
                    return Math.floor(months) + ' months ago';
                }
            }
            if (months > 12) {
                let years = Math.floor(months / 12);
                if (years < 2) {
                    return Math.floor(years) + ' year ago';
                } else {
                    return Math.floor(years) + ' years ago';
                }
            }
        }
        return(
            <section className="description">
                <div className="description__container">
                    <h1 className="description__title">{title}</h1>
                    <div className="description__labels">
                        <div className="description__text-container description__uploader-container">
                            <p className="description__uploader">By {channel}</p>
                            <p className="description__text">{calculateTimeStamp(timestamp)}</p>
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
                <CommentsContainer mainVideo={props.descriptionObject}/>
            </section>
        );
    }


export default Description;