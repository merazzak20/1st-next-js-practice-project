import axios from "axios";
import Link from "next/link";
import React from "react";

const SingleBlog = ({ index, blog }) => {
  return (
    <div className="my-3">
      <Link href={`/blogDetails/${blog.id}`}>
        <h2 className="card-title capitalize">
          {index + 1}. {blog?.title}
        </h2>
      </Link>
    </div>
  );
};

export default SingleBlog;
