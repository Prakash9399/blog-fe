import React from 'react'

const Navbar = () => {
  return (
   <>
 <nav className="flex justify-between items-center p-4  text-white">
      <h1 className="text-3xl font-semibold">ZuAi</h1>
      <div className="flex space-x-4">
        <button className="px-4 py-2  rounded">Login</button>
        <button className="px-4 py-2  rounded ">Signup</button>
      </div>
    </nav>
   </>
  )
}

export default Navbar