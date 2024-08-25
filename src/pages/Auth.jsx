import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState('');

  const navigate = useNavigate(); // Hook for navigation

  useEffect(() => {
    if (responseMessage === 'Login successful!') {
      navigate('/'); // Navigate after login success message
    }
  }, [responseMessage, navigate]);

  const toggleForm = () => {
    setIsLogin(!isLogin);
    setError(''); // Clear any previous errors
    setResponseMessage(''); // Clear the previous response message
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setResponseMessage('');

    try {
      if (isLogin) {
        // Handle login
        const response = await axios.post('https://blog-inky-one-94.vercel.app/api/auth/login', {
          email: formData.email,
          password: formData.password
        });
        const token = response.data.token;
        localStorage.setItem('authToken', token);
        setResponseMessage('Login successful!'); // Set success message
      } else {
        // Handle signup
        if (formData.password !== formData.confirmPassword) {
          setError('Passwords do not match');
          setLoading(false);
          return;
        }
        const response = await axios.post('https://blog-inky-one-94.vercel.app/api/auth/register', {
          name: formData.name,
          email: formData.email,
          password: formData.password
        });
        setResponseMessage(response.data.message); // Show success message
      }
    } catch (error) {
      setError('An error occurred');
      if (error.response && error.response.data && error.response.data.message) {
        setError(error.response.data.message); // Show error message from server
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center text-white">
      <div className="max-w-md w-full shadow-md rounded-lg p-8">
        <h2 className="text-2xl font-semibold text-center mb-6 ">
          {isLogin ? 'Login' : 'Sign Up'}
        </h2>
        <form onSubmit={handleSubmit}>
          {!isLogin && (
            <div className="mb-4">
              <label htmlFor="name" className="block">Name</label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 text-black  border rounded-md focus:outline-none focus:ring-2"
                placeholder="Enter your name"
              />
            </div>
          )}
          <div className="mb-4">
            <label htmlFor="email" className="block">Email</label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 text-black border rounded-md focus:outline-none focus:ring-2"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block">Password</label>
            <input
              type="password"
              id="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 text-black  border rounded-md focus:outline-none focus:ring-2"
              placeholder="Enter your password"
            />
          </div>
          {!isLogin && (
            <div className="mb-4">
              <label htmlFor="confirm-password" className="block">Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="w-full px-4 py-2 text-black  border rounded-md focus:outline-none focus:ring-2"
                placeholder="Confirm your password"
              />
            </div>
          )}
          {error && (
            <div className="mb-4 text-red-600">{error}</div>
          )}
          {responseMessage && (
            <div className="mb-4 text-green-600">{responseMessage}</div>
          )}
          <button
            type="submit"
            className={`w-full bg-neutral-600 text-white py-2 rounded-md transition duration-200 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
            disabled={loading}
          >
            {isLogin ? 'Login' : 'Sign Up'}
          </button>
        </form>
        <p className="text-center mt-4">
          {isLogin ? "Don't have an account?" : 'Already have an account?'}
          <button
            onClick={toggleForm}
            className="text-neutral-600 font-semibold hover:underline ml-1"
          >
            {isLogin ? 'Sign Up' : 'Login'}
          </button>
        </p>
      </div>
    </div>
  );
};

export default Auth;
