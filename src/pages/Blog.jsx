import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Blog = () => {
  const navigate = useNavigate();
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    // Fetch blogs from API
    const fetchBlogs = async () => {
      try {
        const response = await axios.get('https://blog-inky-one-94.vercel.app/api/v1/posts'); // Replace with your actual API endpoint
        setBlogs(response.data);
      } catch (error) {
        console.error('Error fetching blogs:', error);
      }
    };

    fetchBlogs();
  }, []);

  const handleCardClick = (id) => {
    navigate(`/blog/${id}`);
  };

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {blogs.map((blog) => (
          <div
            key={blog._id}
            className="max-w-sm mx-auto text-white bg-neutral-700 shadow-lg rounded-lg overflow-hidden cursor-pointer"
          >
            <div className="p-4">
              <h2 className="text-xl font-semibold">{blog.title}</h2>
              <p className="mt-2">by {blog.user}</p>
              <p className="mt-3 text-sm">
                {blog.description.substring(0, 100)}...
              </p>
              <button 
                className="mt-4 px-4 py-2 bg-neutral-600 text-white rounded hover:bg-neutral-700 transition duration-200"
                onClick={() => handleCardClick(blog._id)}
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
