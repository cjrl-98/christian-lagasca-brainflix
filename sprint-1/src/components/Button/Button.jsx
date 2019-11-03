import React from 'react';

import './Button.scss';

const Button = props => {
    return (
        <button className={`button ${props.className}`} name={props.name}>
            {props.childNodes}
            {props.text}
        </button>
    );
}

export default Button;