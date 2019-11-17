import React from 'react';
import axios from 'axios';

import './UploadContainer.scss';
import Button from '../Button/Button';
import uploadPreview from '../../Assets/Images/Upload-video-preview.jpg';

export default class UploadContainer extends React.Component {
    state = {
        uploadFormRef : React.createRef(),
        videoDescription: "",
        title: "",
        componentIsMounted: false,
    }

    postVideo = (event) => {
        event.preventDefault();
        const videoDescription = this.state.uploadFormRef.current.videoDescription.value;
        const title = this.state.uploadFormRef.current.title.value;
        try{
            axios({ 
              method: 'post',
              url: `http://localhost:8080/videos`,
              data: {
                  title: title,
                  videoDescription: videoDescription
              }})
              this.setState({
                videoDescription: "",
                title: ""
            })
        }
        catch(error) {
            console.log(error);
        }
    }

    onChangeHandler = event => {
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    render() {
        return (
            <section className="upload">
                <form ref={this.state.uploadFormRef} className="upload__container" onSubmit={this.postVideo}>
                    <h1 className="upload__title">Upload Video</h1>
                    <hr className="hr-divider upload-divider"/>
                    <div className="upload__form-container">
                        <div>
                            <p className="upload__thumbnail-title label">VIDEO THUMBNAIL</p>
                            <img className="upload__thumbnail-img" src={uploadPreview} alt="upload preview"/>
                        </div>
                        <section className="upload__forms">
                            <div className='form-input'>
                                <div className="form">
                                    <label className="form__label label">TITLE YOUR VIDEO</label>
                                    <textarea className='form__input upload__title-form' type='text' name="title" placeholder="Add a title to your video" value={this.state.title} onChange={this.onChangeHandler} required></textarea>
                                </div>
                            </div>
                            <div className='form-input'>
                                <div className="form">
                                    <label className="form__label label">ADD A VIDEO DESCRIPTION</label>
                                    <textarea className='form__input upload__title-form' type='text' name="videoDescription" placeholder="Add a description of your video" value={this.state.videoDescription} onChange={this.onChangeHandler} required></textarea>
                                </div>
                            </div>
                        </section>
                    </div>
                    <hr className="hr-divider upload-divider"/>
                    <div className="upload__button-container">
                        <button className="upload__cancel-btn">CANCEL</button>
                        <Button text="Publish" className="upload__publish-btn"></Button>
                    </div>
                </form>
            </section>
        );
    }
}