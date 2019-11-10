import React from "react";

import "./CommentsContainer.scss";

import Button from "../Button/Button";
import FormInput from '../FormInput/FormInput';
import CommentCard from "../CommentCard/CommentCard";
import ChannelPhoto from "../ChannelPhoto/ChannelPhoto";

class CommentsContainer extends React.Component {
  render() {
    //check if props exist
    // return null if no props exist
    if(!this.props.descriptionObject){
      return null
  }
    const descriptionObject = this.props.descriptionObject;
    const commentList = descriptionObject.comments.map(comment => (
      <CommentCard key={comment.id} comment={comment} />
    ));
    return (
      <section className="comments__container">
        <p className="comment__number">{`${descriptionObject.comments.length} Comments`}</p>
        <div className="comment__form">
          <ChannelPhoto
            className="form__channel-img"
            channelImg={this.props.channelImg}
            alt={this.props.alt}
          />
          <FormInput type="text" name="comment" placeholder="Write comment here" label="JOIN THE CONVERSATION" formClass="comment__form-input">
            <Button className="form__button" text="COMMENT" name="comment" />
          </FormInput>
        </div>
        <hr className="hr-divider" />
        {commentList}
      </section>
    );
  }
}


export default CommentsContainer;
