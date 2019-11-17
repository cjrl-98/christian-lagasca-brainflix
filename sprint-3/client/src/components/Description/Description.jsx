import React from 'react';
import axios from 'axios';

import './Description.scss';

import viewsIcon from '../../Assets/Icons/SVG/Icon-views.svg';
import likesIcon from '../../Assets/Icons/SVG/Icon-likes.svg';

import CommentsContainer from '../CommentsContainer/CommentsContainer';
import CalculateTimeStamp from '../../modules/calculateTimeStamp';

export default class Description extends React.Component{

state={
    likeColor : '#323232',
}

async putLikes(id){
    try{
        await axios.put(`http://localhost:8080/videos/${id}/likes`);
        this.props.renderComments();
        this.setState({
            ikeColor : 'red',
        })
    }
    catch(error) {
        alert(error);
    }
}

render(){
    //check if props exist
    // return null if no props exist
    if(!this.props.descriptionObject){
        return null;
    }
    const {title, description, channel,
        views,likes,timestamp,id} = this.props.descriptionObject;
        
return(
    <section className="description">
        <div className="description__container">
            <h1 className="description__title">{title}</h1>
            <div className="description__labels">
                <div className="description__text-container description__uploader-container">
                    <p className="description__uploader">By {channel}</p>
                    <p className="description__text">{CalculateTimeStamp(timestamp)}</p>
                </div>
                <div className="description__text-container description__text--stats">
                    <div className="description__text-container description__views-container">
                        <img className="description__views-icon" src={viewsIcon} alt="views icon"/>
                        <p className="description__text">{views}</p>
                    </div>
                    <div className="description__text-container">
                        <img onClick={()=>{this.putLikes(id)}} className="description__likes-icon" src={likesIcon} alt="likes icon"/>
                        <p className="description__text">{likes}</p>
                    </div>
                </div>
            </div>
            <hr className="hr-divider"/>
            <p className="description__text description__text--long">{description}</p>
        </div>
        <CommentsContainer renderComments={this.props.renderComments} descriptionObject={this.props.descriptionObject} channelImg={this.props.channelImg}/>
    </section>
);
}
}


