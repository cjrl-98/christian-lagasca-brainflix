import React from 'react';
import './Header.scss';

import uploadIcon from '../../Assets/Icons/SVG/Icon-upload.svg';

import Button from '../Button/Button';

const Header = props => {
    return(
        <header className='header'>
            <div className='header__container'>
                <div className='header__logo-container'>
                    <img className="header__logo" src={props.logoImg} alt="website logo"/>
                </div>
                <nav className="header__nav">
                    <input className="nav__search" type="text" placeholder="Search" name="nav__search" required/>
                    <div className="nav__upload-dp">
                        <Button 
                            text="Upload" 
                            childNodes={<span className="nav__add-icon"><img src={uploadIcon} alt='button icon'></img></span>}/>
                        {/* <button className="nav__add"><span className="nav__add-icon"><img src={uploadIcon}></img></span>Upload</button> */}
                        <img className="nav__profile-pic" src={props.profilePic} alt="User Display Pic"></img>
                    </div>
                </nav>
            </div>
        </header>
    );
}

export default Header;