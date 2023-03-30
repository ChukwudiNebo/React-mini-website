import React from 'react'
import './input.css'
const Input = ({ inputType, inputName, inputValue, inputPlaceholder }) => {
  return (
    <>
      <input
        type={inputType}
        name={inputName}
        id="input"
        // value={inputValue}
        placeholder={inputPlaceholder}
        // width: "600px", height: "60px",
      />
    </>
  );
};

export default Input
