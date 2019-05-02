import React, { Component } from 'react';

class Input extends Component {
    render() { 
        const { type, name, placeholder, value, handleChange } = this.props;
        return (
            <input className="form-control"
                   type={type ? type : "text"}
                   name={name}
                   placeholder={placeholder ? placeholder : "Type Here"}
                   value={value}
                   onChange={handleChange}
            />
         );
    }
}
 
export default Input;