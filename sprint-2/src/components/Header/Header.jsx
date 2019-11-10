import React from 'react';
import { Link } from "react-router-dom";

import './Header.scss';

import uploadIcon from '../../Assets/Icons/SVG/Icon-upload.svg';
import brainFlixLogo from '../../Assets/Logo/Logo-brainflix.svg';
import profilePic from "../../Assets/Images/Mohan-muruge.jpg";

import Button from '../Button/Button';
import ChannelPhoto from '../ChannelPhoto/ChannelPhoto';

const Header = props => {
    return(
        <header className='header'>
            <div className='header__container'>
                <div className='header__logo-container'>
                    <Link to="/"><img className="header__logo" src={brainFlixLogo} alt="website logo"/></Link>
                </div>
                <nav className="header__nav">
                    <input className="nav__search" type="text" placeholder="Search" name="nav__search" required/>
                    <div className="nav__upload-dp">
                        <Link to="/upload"><Button 
                            text="Upload" 
                            childNodes={<span className="nav__add-icon"><img src={uploadIcon} alt='button icon'></img></span>}/>
                        </Link>
                        <ChannelPhoto
                            className="nav__profile-pic"
                            channelImg={profilePic}
                            alt={'profile pic'}
                        />
                    </div>
                </nav>
            </div>
        </header>
    );
}

export default Header;