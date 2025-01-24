"use client";

import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useEffect, useState } from "react";
import SingleBlog from "../app/components/SingleBlog";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  //   const { data: blogs } = useQuery({
  //     queryKey: ["blogs"],
  //     queryFn: async () => {
  //       const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
  //       return res.data;
  //     },
  //   });

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => setBlogs(res.data));
  }, []);
  return (
    <div className="my-7 container mx-auto px-10">
      <h2 className="text-xl font-semibold">Available Blogs: {blogs.length}</h2>
      <div className="mt-10">
        {blogs.map((blog, idx) => (
          <SingleBlog key={blog.id} index={idx} blog={blog}></SingleBlog>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
