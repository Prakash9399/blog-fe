import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './component/Navbar';
import Blog from './pages/Blog';
import BlogDetails from './component/BlogDetails';
import Auth from './pages/Auth';
import CreateBlog from './component/BlogEditor';

import EditBlog from './pages/EditBlog';

const PrivateRoute = ({ element, ...rest }) => {
  const isAuthenticated = localStorage.getItem('authToken'); // Check if the token is stored
  return isAuthenticated ? element : <Navigate to="/auth" />;
};

function App() {
  return (
    <Router>
      <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
        <div className="fixed top-0 -z-10 h-full w-full">
          <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
        </div>
        <div className="container mx-auto px-8">
          <Navbar />
          <Routes>
            <Route path="/" element={<PrivateRoute element={<Blog />} />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/blog/:id" element={<PrivateRoute element={<BlogDetails />} />} />
            <Route path="/create" element={<PrivateRoute element={<CreateBlog />} />} />
            <Route path="/edit/:id" element={<PrivateRoute element={<EditBlog />} />} /> 

          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
