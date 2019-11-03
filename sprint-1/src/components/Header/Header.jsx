import React from 'react';
import './Header.scss';

import uploadIcon from '../../Assets/Icons/SVG/Icon-upload.svg';

import Button from '../Button/Button';
import ChannelPhoto from '../ChannelPhoto/ChannelPhoto';

const Header = props => {
    return(
        <header className='header'>
            <div className='header__container'>
                <div className='header__logo-container'>
                    <a href="/"><img className="header__logo" src={props.logoImg} alt="website logo"/></a>
                </div>
                <nav className="header__nav">
                    <input className="nav__search" type="text" placeholder="Search" name="nav__search" required/>
                    <div className="nav__upload-dp">
                        <Button 
                            text="Upload" 
                            childNodes={<span className="nav__add-icon"><img src={uploadIcon} alt='button icon'></img></span>}/>
                        <ChannelPhoto
                            className="nav__profile-pic"
                            channelImg={props.profilePic}
                            alt={props.alt}
                        />
                    </div>
                </nav>
            </div>
        </header>
    );
}

export default Header;