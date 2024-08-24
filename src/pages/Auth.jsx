import React, { useState } from 'react'

const Auth = () => {
    const [isLogin, setIsLogin] = useState(true);

    const toggleForm = () => {
      setIsLogin(!isLogin);
    };
    return (
        <div className="min-h-screen flex items-center justify-center ">
          <div className="max-w-md w-full  shadow-md rounded-lg p-8">
            <h2 className="text-2xl font-semibold text-center mb-6 text-white">
              {isLogin ? 'Login' : 'Sign Up'}
            </h2>
            <form>
              {!isLogin && (
                <div className="mb-4">
                  <label htmlFor="name" className="block ">Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2"
                    placeholder="Enter your name"
                  />
                </div>
              )}
              <div className="mb-4">
                <label htmlFor="email" className="block ">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2"
                  placeholder="Enter your email"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="password" className="block ">Password</label>
                <input
                  type="password"
                  id="password"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2"
                  placeholder="Enter your password"
                />
              </div>
              {!isLogin && (
                <div className="mb-4">
                  <label htmlFor="confirm-password" className="block ">Confirm Password</label>
                  <input
                    type="password"
                    id="confirm-password"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 "
                    placeholder="Confirm your password"
                  />
                </div>
              )}
              <button className="w-full bg-neutral-600 text-white py-2 rounded-md  transition duration-200">
                {isLogin ? 'Login' : 'Sign Up'}
              </button>
            </form>
            <p className="text-center mt-4">
              {isLogin ? "Don't have an account?" : 'Already have an account?'}
              <button
                onClick={toggleForm}
                className=" text-neutral-600 font-semibold hover:underline ml-1"
              >
                {isLogin ? 'Sign Up' : 'Login'}
              </button>
            </p>
          </div>
        </div>
      );
}

export default Auth