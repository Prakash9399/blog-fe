import React from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear the authentication token from local storage
    localStorage.removeItem('authToken');
    
    // Redirect the user to the login page
    navigate('/auth');
  };

  return (
    <nav className="flex justify-between items-center p-4 text-white">
      <h1 className="text-3xl font-semibold cursor-pointer" onClick={() => navigate('/')}>
        ZuAi
      </h1>
      <div className="flex space-x-4 px-4 py-2">
        <h2 className="mr-2 cursor-pointer" onClick={() => navigate('/')}>
          Blogs
        </h2>
        
        <h2 className="mr-2 cursor-pointer" onClick={() => navigate('/create')}>
         Create Blog
        </h2>
        <button
          className="rounded cursor-pointer"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
