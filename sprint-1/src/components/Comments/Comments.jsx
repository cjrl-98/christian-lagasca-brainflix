import React from 'react';

import './Comments.scss';


class Comment extends React.Component{
    render(){
        return(
            <React.Fragment>
                <div className="comment__card comment--new">
                <img className="comment__card__img comment__card__img--top" alt="user profile dp"/>
                <div className="comment__content">
                    <div className="comment__card__header">
                        <p className="comment__card__text comment__card__text--name">Micheal Lyons</p>
                        <p className="comment__card__text comment__card__text--date card__form__label">1 year ago</p>
                    </div>
                    <p className="comment__card__text comment__card__text--comment">They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of acconcert I have EVER witnessed.</p>
                </div>
                </div>
            </React.Fragment>
        );
    }
}


export default Comment;