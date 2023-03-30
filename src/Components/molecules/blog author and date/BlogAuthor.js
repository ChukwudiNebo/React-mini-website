import React from 'react'

const BlogAuthor = ({author,blogDate}) => {
  return (
    <>
      <p style={{ margin: "0px", padding: "0px" }}>written by{author}</p>
      <p style={{ margin: "0px", padding: "0px" }}>on {blogDate}</p>
    </>
  );
}

export default BlogAuthor
