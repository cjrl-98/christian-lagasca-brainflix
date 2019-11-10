import React from 'react';

import './UploadContainer.scss';
import FormInput from '../FormInput/FormInput';
import Button from '../Button/Button';
import uploadPreview from '../../Assets/Images/Upload-video-preview.jpg';

export default class UploadContainer extends React.Component {
    render(){
        return(
            // <section className="upload">
            //     <h1 className="upload__title">Upload Video</h1>
            //     <hr className="upload-divider"/>
            //     <div className="upload__container">
                    // <div>
                    //     <p className="upload__thumbnail-title label">VIDEO THUMBNAIL</p>
                    //     <img className="upload__thumbnail-img" src={uploadPreview}/>
                    // </div>
            //         <div className="upload__forms">
            //             <FormInput label="TITLE YOUR VIDEO" placeholder="Add a title to your video" textAreaClass="upload__title-form"></FormInput>
            //             <FormInput label="ADD A VIDEO DESCRIPTION" placeholder="Add a description of your video" textAreaClass="upload__description-form"></FormInput>
            //         </div>
            //     </div>
            //     <hr className="upload-divider"/>
            //     <div className="upload__button-container">
            //             <button className="upload__cancel-btn">CANCEL</button>
            //             <Button text="Publish" className="upload__publish-btn"></Button>
            //     </div>
            // </section>
            <section className="upload">
                <div className="upload__container">
                    <h1 className="upload__title">Upload Video</h1>
                    <hr className="hr-divider upload-divider"/>
                    <div className="upload__form-container">
                        <div>
                            <p className="upload__thumbnail-title label">VIDEO THUMBNAIL</p>
                            <img className="upload__thumbnail-img" src={uploadPreview} alt="upload preview"/>
                        </div>
                        <div className="upload__forms">
                            <FormInput label="TITLE YOUR VIDEO" placeholder="Add a title to your video" textAreaClass="upload__title-form"></FormInput>
                            <FormInput label="ADD A VIDEO DESCRIPTION" placeholder="Add a description of your video" textAreaClass="upload__description-form"></FormInput>
                        </div>
                    </div>
                    <hr className="hr-divider upload-divider"/>
                    <div className="upload__button-container">
                        <button className="upload__cancel-btn">CANCEL</button>
                        <Button text="Publish" className="upload__publish-btn"></Button>
                    </div>
                </div>
            </section>
        );
    }
}


