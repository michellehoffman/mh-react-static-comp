import React from 'react';
import './Button.css';

const Button = (props) => {
  return (
      <div className={'button ' + props.buttonType}>
        {props.buttonText}
      </div>
  )
}

export default Button;
