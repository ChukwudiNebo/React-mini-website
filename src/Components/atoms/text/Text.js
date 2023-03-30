import React, { useEffect, useState } from "react";

const Text = ({ text }) => {
  const [capital, setCapital] = useState(text);
  const firstLetter = capital.charAt(0);
  const capitalized = firstLetter.toUpperCase() + capital.slice(1);
  console.log(capitalized);
  useEffect(() => {
    setCapital(capitalized);
  }, []);

  const firstLetterStyle={
    fontSize:'50'
  }
  return (
    <>
      <p style={{firstLetterStyle, margin: "0px", padding: "0px" }}>{capital}</p>
    </>
  );
};

export default Text;
