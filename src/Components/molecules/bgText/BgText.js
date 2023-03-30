import React from "react";
import Text from "../../atoms/text/Text";
import "./bgtext.css";

const BgText = ({ text }) => {
  return (
    <>
      <div className="background-image">
        <div className="background-image__text">
          <Text text={text} />
        </div>
      </div>
    </>
  );
};

export default BgText;
