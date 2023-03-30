import React from 'react'
import './button.css'

const Button = ({ buttonText }) => {
  return (
    <>
      <button type="button" className="button">
        {buttonText}
      </button>
    </>
  );
};

export default Button
