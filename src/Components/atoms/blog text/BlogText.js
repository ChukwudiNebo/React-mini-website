import React from "react";

const BlogText = ({ blogFirstParagrapg }) => {
  let paragraph = blogFirstParagrapg;
  const words = paragraph.split("");
  const firstWord = words.shift();
  const remainingWords = words.join("");
  return (
    <>
      <div className="">
        <span
          style={{
            fontSize: "50px",
          }}
        >
          {firstWord.charAt(0).toUpperCase()}
        </span>
        <span style={{}}>
          {firstWord.slice(1)}
          {remainingWords}
        </span>
      </div>
    </>
  );
};

export default BlogText;
