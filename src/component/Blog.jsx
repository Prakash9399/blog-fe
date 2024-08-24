import React from 'react';
import { useNavigate } from 'react-router-dom';

const Blog = () => {
  const navigate = useNavigate();

  const blogs = [
    {
      id: 1,
      title: "Understanding MERN Stack",
      writer: "John Doe",
      description: "The MERN stack is a popular web development stack comprising MongoDB, Express.js, React, and Node.js. In this blog, we'll dive into the basics of each component and how they work together to build full-stack applications."
    },
    {
      id: 2,
      title: "Getting Started with Tailwind CSS",
      writer: "Jane Smith",
      description: "Tailwind CSS is a utility-first CSS framework that allows developers to build custom designs without writing CSS. This blog covers the fundamentals and how to integrate it into your projects."
    },
    {
      id: 3,
      title: "Introduction to Node.js",
      writer: "Michael Lee",
      description: "Node.js is a powerful runtime environment for executing JavaScript on the server side. This blog explores its features, advantages, and how to get started with Node.js development."
    },
  ];

  const handleCardClick = (id) => {
    navigate(`/blog/${id}`);
  };

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="max-w-sm mx-auto text-white bg-neutral-700 shadow-lg rounded-lg overflow-hidden cursor-pointer"
          >
            <div className="p-4">
              <h2 className="text-xl font-semibold">{blog.title}</h2>
              <p className="mt-2">by {blog.writer}</p>
              <p className="mt-3 text-sm">
                {blog.description.substring(0, 100)}...
              </p>
              <button 
                className="mt-4 px-4 py-2 bg-neutral-600 text-white rounded hover:bg-neutral-700 transition duration-200"
                onClick={() => handleCardClick(blog.id)}
              >
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
