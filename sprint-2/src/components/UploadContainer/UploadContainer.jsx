import React from 'react';

import './UploadContainer.scss';
import uploadPreview from '../../Assets/Images/Upload-video-preview.jpg';

export default class UploadContainer extends React.Component {
    render(){
        return(
            <section className="upload">
                <h1 className="upload__title">Upload Video</h1>
                <div>
                    <p className="upload__thumbnail-title">VIDEO THUMBNAIL</p>
                    <img className="upload__thumbnail-img" src={uploadPreview}/>
                </div>
            </section>
        );
    }
}


