import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const BlogDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch blog details from API
    const fetchBlogDetails = async () => {
      try {
        const response = await axios.get(`https://blog-inky-one-94.vercel.app/api/v1/posts/${id}`);
        setBlog(response.data);
        setLoading(false);
      } catch (error) {
        setError('Error fetching blog details');
        setLoading(false);
      }
    };

    fetchBlogDetails();
  }, [id]);

  const handleDelete = async () => {
    try {
      await axios.delete(`https://blog-inky-one-94.vercel.app/api/v1/posts/${id}`);
      navigate('/'); // Redirect to home page after deletion
    } catch (error) {
      console.error('Error deleting post:', error);
    }
  };

  const handleEdit = () => {
    navigate(`/edit/${id}`); // Redirect to edit page
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!blog) {
    return <div>Blog not found</div>;
  }

  return (
    <div className="container mx-auto p-4 text-white">
      <h1 className="text-3xl font-semibold mb-4">{blog.title}</h1>
      <p className="mb-4">by {blog.writer}</p>
      <p>{blog.description}</p>
      <div className="flex space-x-4 mt-6">
        <button 
          onClick={handleEdit} 
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
        >
          Edit
        </button>
        <button 
          onClick={handleDelete} 
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default BlogDetails;
