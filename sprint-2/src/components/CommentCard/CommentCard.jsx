import React from 'react';
import axios from 'axios';
import Button from '../Button/Button';
import './CommentCard.scss';
import ChannelPhoto from '../ChannelPhoto/ChannelPhoto';
import CalculateTimeStamp from '../../modules/calculateTimeStamp';

const CommentCard = props => {
        const deleteComment = () => {
            props.deleteComment(props.comment.id);
        }
        return(
            <div className="card-container">
                <div className="comment__card comment--new">
                    <ChannelPhoto className="comment__card-img"/>
                    <div className="comment__content">
                        <div className="comment__card__header">
                            <p className="comment__card__text comment__card__text--name">{props.comment.name}</p>
                            <p className="comment__card__text comment__card__text--date card__form__label">{CalculateTimeStamp(props.comment.timeStamp)}</p>
                        </div>
                        <p className="comment__card__text comment__card__text--comment">{props.comment.comment}</p>
                    </div>
                    <Button type="button" onClick={deleteComment} text="DELETE" className="comment__card-delete"></Button>
                </div>
                <hr className="hr-divider"/>
            </div>
        );
    }

export default CommentCard; 