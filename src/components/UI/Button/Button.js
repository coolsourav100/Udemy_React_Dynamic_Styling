import React from 'react';

import './Button.css';

const Button = props => {
  return (
    <button type={props.type} className={`button ${!props.btn ? 'disable' : ''}`} onClick={props.onClick} disabled={!props.btn}>
      {props.children}
    </button>
  );
};

export default Button;
