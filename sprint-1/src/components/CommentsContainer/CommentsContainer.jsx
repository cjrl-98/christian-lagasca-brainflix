import React from 'react';

import './CommentsContainer.scss';

import Button from '../Button/Button';

class CommentsContainer extends React.Component{
    render(){
        return(
            <section className="comment">
                <p className='comment__number'>{`${this.props.numComments} Comments`}</p>
                <div className="comment__form">
                    <div className="comment__img"></div>
                    <form className="comment__form-input comment__card-container">
                        <div className="form">
                            <label className="form__label label" htmlFor="comment">JOIN THE CONVERSATION</label>
                            <textarea className="form__input" type="text" name="comment" required></textarea>
                        </div>
                        <Button className="form__button" text="COMMENT" name="comment"/>
                    </form>
                </div>  
            </section>    
        );
    }
}


export default CommentsContainer;