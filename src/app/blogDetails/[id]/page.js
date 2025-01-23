import axios from "axios";
import React from "react";

const page = async ({ params }) => {
  const { id } = params;
  const response = await axios.get(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );
  const blog = response.data;
  console.log(params);
  return (
    <div className="p-5 container mx-auto my-11 text-center">
      <h1 className="text-4xl font-bold mb-4 capitalize">{blog.title}</h1>
      <p className="text-gray-700">{blog.body}</p>
    </div>
  );
};

export default page;
