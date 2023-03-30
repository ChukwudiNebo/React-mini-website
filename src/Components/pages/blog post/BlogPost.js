import React from "react";
import "./blogpost.css";
import BlogAuthor from "../../molecules/blog author and date/BlogAuthor";
import Text from "../../atoms/text/Text";

const BlogPost = () => {
  return (
    <>
      <div className="blogPost">
        <div className="blogPost__header">
          <div className="blogPost__heading">
            <Text
              text="15 Disadvantages Of Freedom And How You Can
Workaround It."
            />
          </div>
          <div className="blogPost__author">
            <BlogAuthor author="@samurai2099" blogDate="27 may 2022" />
          </div>
        </div>
        <div className="blogPost__paragraph">
          <div>
            <Text
              text="lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, enim harum. Esse repellendus quae explicabo vel voluptatibus et similique inventore reprehenderit cupiditate, ipsum nesciunt, deleniti fuga qui quos. At, eum.
            Omnis molestias distinctio, ea facere labore voluptatibus pariatur odio architecto ipsa delectus ex aperiam inventore laborum nulla quasi aliquam, suscipit assumenda? Repellat autem similique modi quae rerum? In, aut obcaecati.
            Dolores dolor ab impedit, odio perspiciatis, optio, natus eaque esse suscipit ratione exercitationem enim. Tempora ipsa voluptatum dolore architecto quas. Ex suscipit vitae facilis odio enim nesciunt voluptatibus at atque."
            />
          </div>
          <div className="blogPost__paragraph-1">
            <Text
              text="lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, enim harum. Esse repellendus quae explicabo vel voluptatibus et similique inventore reprehenderit cupiditate, ipsum nesciunt, deleniti fuga qui quos. At, eum.
            Omnis molestias distinctio, ea facere labore voluptatibus pariatur odio architecto ipsa delectus ex aperiam inventore laborum nulla quasi aliquam, suscipit assumenda? Repellat autem similique modi quae rerum? In, aut obcaecati.
            Dolores dolor ab impedit, odio perspiciatis, optio, natus eaque esse suscipit ratione exercitationem enim. Tempora ipsa voluptatum dolore architecto quas. Ex suscipit vitae facilis odio enim nesciunt voluptatibus at atque."
            />
          </div>
          <div>
            <Text
              text="lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, enim harum. Esse repellendus quae explicabo vel voluptatibus et similique inventore reprehenderit cupiditate, ipsum nesciunt, deleniti fuga qui quos. At, eum.
            Omnis molestias distinctio, ea facere labore voluptatibus pariatur odio architecto ipsa delectus ex aperiam inventore laborum nulla quasi aliquam, suscipit assumenda? Repellat autem similique modi quae rerum? In, aut obcaecati.
            Dolores dolor ab impedit, odio perspiciatis, optio, natus eaque esse suscipit ratione exercitationem enim. Tempora ipsa voluptatum dolore architecto quas. Ex suscipit vitae facilis odio enim nesciunt voluptatibus at atque."
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogPost;
