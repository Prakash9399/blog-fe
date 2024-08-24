import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const BlogEditor = () => {
  const [content, setContent] = useState('');

  const handleContentChange = (value) => {
    setContent(value);
  };

  const handleSubmit = () => {
    // Handle blog submission logic here
    console.log('Blog content:', content);
  };

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
          />
        </div>
        <div className="mb-4">
          <label htmlFor="content" className="block text-white">Content</label>
          <ReactQuill
            theme="snow"
            value={content}
            onChange={handleContentChange}
            className="h-72 bg-white text-black rounded-md overflow-hidden"
          />
        </div>
        <button
          onClick={handleSubmit}
          className="bg-neutral-600 text-white py-2 px-4 rounded-md transition duration-200"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default BlogEditor;
