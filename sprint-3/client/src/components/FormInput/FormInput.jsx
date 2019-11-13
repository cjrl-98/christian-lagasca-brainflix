import React from 'react';

import './FormInput.scss';

export default class FormInput extends React.Component{
    render(){
        return(
            <div className={`form-input ${this.props.formClass}`}>
                <div className="form">
                <label className="form__label label">{this.props.label}</label>
                <textarea
                    className={`form__input ${this.props.textAreaClass}`}
                    type={this.props.type}
                    name={this.props.name}
                    placeholder={this.props.placeholder}
                    value={this.props.value}
                    onChange={this.props.onChange}
                    required
                ></textarea>
                </div>
                {this.props.children}
            </div>
        );
    }
}

