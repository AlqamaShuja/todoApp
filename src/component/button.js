import React, { Component } from 'react';

class Button extends Component {
    render() { 
        const { onClick, disabled, ButtonName, className } = this.props;
        return ( 
            <button className={className}
                    onClick={onClick}
                    disabled={disabled}
            > { ButtonName } </button>
         );
    }
}
 
export default Button;