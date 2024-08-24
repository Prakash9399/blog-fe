import React from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <>
      <nav className="flex justify-between items-center p-4 text-white">
        <h1 className="text-3xl font-semibold">ZuAi</h1>
        <div className="flex space-x-4">
          <button
            className="px-4 py-2 rounded"
            onClick={() => navigate('/auth')}
          >
            Login
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
