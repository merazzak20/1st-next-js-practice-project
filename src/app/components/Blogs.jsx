"use client";

import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useEffect, useState } from "react";

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
  console.log(blogs);
  return (
    <div className="my-7">
      <h2 className="text-3xl font-bold">Available Blogs: {blogs.length}</h2>
    </div>
  );
};

export default Blogs;
