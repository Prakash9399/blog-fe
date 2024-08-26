import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import axios from 'axios';

const EditBlog = () => {
  const { id } = useParams(); // Get the blog ID from the route parameters
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch the existing blog post data
    const fetchBlogDetails = async () => {
      try {
        const response = await axios.get(`https://blog-inky-one-94.vercel.app/api/v1/posts/${id}`);
        setTitle(response.data.title);
        setDescription(response.data.description);
        setLoading(false);
      } catch (error) {
        setError('Error fetching blog details');
        setLoading(false);
      }
    };

    fetchBlogDetails();
  }, [id]);

  const handleContentChange = (value) => {
    setDescription(value);
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = async () => {
    try {
      const authToken = localStorage.getItem('authToken'); // Fetch auth token from localStorage

      const response = await axios.put(
        `https://blog-inky-one-94.vercel.app/api/v1/posts/${id}`, // Update request to specific blog post
        { title, description },
        {
          headers: {
            Authorization: `Bearer ${authToken}`, // Include the auth token in the headers
          },
        }
      );

      console.log('Blog updated successfully:', response.data);
      navigate(`/blogs/${id}`); // Redirect back to the blog details page
    } catch (error) {
      console.error('Error updating blog:', error);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="container mx-auto">
      <div className="w-full md:w-1/2 mx-auto bg-transparent p-6 rounded-md shadow-lg">
        <div className="mb-4">
          <label htmlFor="title" className="block text-white">Title</label>
          <input
            type="text"
            id="title"
            className="w-full p-2 border border-neutral-500 rounded-md bg-neutral-700 text-white"
            placeholder="Enter blog title"
            value={title}
            onChange={handleTitleChange}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="content" className="block text-white">Content</label>
          <ReactQuill
            theme="snow"
            value={description}
            onChange={handleContentChange}
            className="h-72 bg-white text-black rounded-md overflow-hidden"
          />
        </div>
        <button
          onClick={handleSubmit}
          className="bg-neutral-600 text-white py-2 px-4 rounded-md transition duration-200"
        >
          Update Blog
        </button>
      </div>
    </div>
  );
};

export default EditBlog;
