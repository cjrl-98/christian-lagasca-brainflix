import React from 'react';

import './Description.scss';

import viewsIcon from '../Assets/Icons/SVG/Icon-views.svg';
import likesIcon from '../Assets/Icons/SVG/Icon-likes.svg';


class Description extends React.Component{
    render(){
        return(
            <section className="description">
                <div className="description__container">
                    <h1 className="description__title">BMX Rampage: 2018 Highlights</h1>
                    <div className="description__labels">
                        <div className="description__text-container description__uploader-container">
                            <p className="description__uploader">By Red Cow</p>
                            <p className="description__text">12/18/2018</p>
                        </div>
                        <div className="description__text-container description__text--stats">
                            <div className="description__text-container description__views-container">
                                <img className="description__views-icon" src={viewsIcon} alt="views icon"/>
                                <p className="description__text">1,001,023</p>
                            </div>
                            <div className="description__text-container">
                                <img className="description__likes-icon" src={likesIcon} alt="likes icon"/>
                                <p className="description__text">110,985</p>
                            </div>
                        </div>
                    </div>
                    <hr className="hr-divider"/>
                    <p className="description__text description__text--long">On a gusty day in Southern Utah, a group of 25 daring mountain bikers blew the doors off what is possible on two wheels, unleashing some of the biggest moments the sport has ever seen. While mother nature only allowed for one full run before the conditions made it impossible to ride, that was all that was needed for event veteran Kyle Strait, who won the event for the second time -- eight years after his first Red Cow Rampage title</p>
                </div>
            </section>
        );
    }
}

export default Description;