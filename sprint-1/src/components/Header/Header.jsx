import React from 'react';

import './Header.scss';

import brainFlixLogo from '../../Assets/Logo/Logo-brainflix.svg';
import profilePic from "../../Assets/Images/Mohan-muruge.jpg";



const Header = () => {
    return(
        <header className='header'>
            <div className='header__container'>
                <div className='header__logo-container'>
                    <img className="header__logo" src={brainFlixLogo} alt="Brain Flix Logo"/>
                </div>
                <nav className="header__nav">
                    <input className="nav__search" type="text" placeholder="Search" name="nav__search" required/>
                    <div className="nav__upload-dp">
                        <button className="nav__add"><span className="nav__add-icon">+</span> Upload</button>
                        <img className="nav__profile-pic" src={profilePic} alt="User Display Pic"></img>
                    </div>
                </nav>
            </div>
        </header>
    );
}

export default Header;