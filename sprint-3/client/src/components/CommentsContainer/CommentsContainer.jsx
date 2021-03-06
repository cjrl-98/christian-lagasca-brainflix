import React from "react";
import axios from 'axios';
import "./CommentsContainer.scss";
import Button from "../Button/Button";
import CommentCard from "../CommentCard/CommentCard";
import ChannelPhoto from "../ChannelPhoto/ChannelPhoto";

class CommentsContainer extends React.Component {
  state = {
    commentFormRef : React.createRef(),
    comment : '',
    componentIsMounted: false
  }
  api_key = '?api_key=c8e5f44e-1121-41f8-adef-3f6c22bdfe01';
  url = 'https://project-2-api.herokuapp.com/';
  videosLink = 'videos';

  deleteComment = (id) => {
    axios.delete(`http://localhost:8080/videos/${this.props.descriptionObject.id}/comments/${id}`)
      .then(response => {
        this.props.renderComments();
      })
      .catch(error => {
          console.log(error);
      })
  }
  postComment = (event) => {
    event.preventDefault();
    const comment = this.state.commentFormRef.current.comment.value;
    try{
        axios({ 
          method: 'post',
          url: `http://localhost:8080/videos/${this.props.descriptionObject.id}/comments`,
          data: {
              name: 'BrainStation Man',
              comment: comment
          }})
        this.props.renderComments();
    }
    catch(error) {
        console.log(error);
    }
}
  updateComment = (event) => {
    this.setState({
        [event.target.name] : event.target.value
    })
}

  render() {
    //check if props exist
    // return null if no props exist
    if(!this.props.descriptionObject){ 
      return null
  }
    const descriptionObject = this.props.descriptionObject;
    const commentList = descriptionObject.comments.map(comment => (
      <CommentCard deleteComment={this.deleteComment} key={comment.id} comment={comment} videoId={descriptionObject.id}/>
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
          <form ref={this.state.commentFormRef} onSubmit={this.postComment} className="form-input comment__form-input">
            <div className="form">
              <label className="form__label label">JOIN THE CONVERSATION</label>
              <input type="text" name="comment" value={this.state.comment} onChange={this.updateComment} className="form__input comment__input-area" placeholder="Write comment here" required/>  
            </div>
            <Button text="COMMENT" className="form__button"></Button>
          </form>
        </div>
        <hr className="hr-divider" />
        {commentList}
      </section>
    );
  }
}


export default CommentsContainer;
