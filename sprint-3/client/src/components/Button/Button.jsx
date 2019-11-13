import React from 'react';

import './Button.scss';

const Button = props => {
    return (
        <button onClick={props.onClick} className={`button ${props.className}`} name={props.name}>
            {props.childNodes}
            {props.text}
        </button>
    );
}

export default Button;