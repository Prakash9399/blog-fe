import React from 'react';
import { useParams } from 'react-router-dom';

const BlogDetails = () => {
  const { id } = useParams();

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

  const blog = blogs.find(blog => blog.id === parseInt(id));

  if (!blog) {
    return <div>Blog not found</div>;
  }

  return (
    <div className="container mx-auto p-4 text-white ">
      <h1 className="text-3xl font-semibold mb-4">{blog.title}</h1>
      <p className="mb-4">by {blog.writer}</p>
      <p>{blog.description}</p>
    </div>
  );
};

export default BlogDetails;
