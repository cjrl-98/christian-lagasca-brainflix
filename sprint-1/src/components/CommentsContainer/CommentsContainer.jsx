import React from 'react';

import './CommentsContainer.scss';

import Button from '../Button/Button';
import CommentCard from '../CommentCard/CommentCard';
import ChannelPhoto from '../ChannelPhoto/ChannelPhoto';

class CommentsContainer extends React.Component{
    render(){
        const mainVideo = this.props.mainVideo;
        console.log(mainVideo.comments);
        const commentList = mainVideo.comments.map(comment => <CommentCard comment={comment}/>)
        return(
            <section className="comments__container">
                <p className='comment__number'>{`${mainVideo.comments.length} Comments`}</p>
                <div className="comment__form">
                    <ChannelPhoto/>
                    <form className="comment__form-input comment__card-container">
                        <div className="form">
                            <label className="form__label label" htmlFor="comment">JOIN THE CONVERSATION</label>
                            <textarea className="form__input" type="text" name="comment" required></textarea>
                        </div>
                        <Button className="form__button" text="COMMENT" name="comment"/>
                    </form>
                </div> 
                <hr className="hr-divider"/>
                {commentList}
            </section>    
        );
    }
}


export default CommentsContainer;