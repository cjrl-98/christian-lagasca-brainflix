import React from 'react';

import './FormInput.scss';

export default class FormInput extends React.Component{
    render(){
        return(
            <form className={`form-input ${this.props.formClass}`}>
                <div className="form">
                <label className="form__label label">{this.props.label}</label>
                <textarea
                    className={`form__input ${this.props.textAreaClass}`}
                    type={this.props.type}
                    name={this.props.name}
                    placeholder={this.props.placeholder}
                    required
                ></textarea>
                </div>
                {this.props.children}
            </form>
        );
    }
}

