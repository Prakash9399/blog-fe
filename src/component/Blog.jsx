import React from 'react'

const Blog = () => {
  return (
<div class="container mx-auto p-4">
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    <div class="max-w-sm mx-auto text-white bg-neutral-700 shadow-lg rounded-lg overflow-hidden">
      <div class="p-4">
        <h2 class="text-xl font-semibold">Understanding MERN Stack</h2>
        <p class="mt-2">by John Doe</p>
        <p class="mt-3 text-sm">
          The MERN stack is a popular web development stack comprising MongoDB, Express.js, React, and Node.js. In this blog, we'll dive into the basics of each component and how they work together to build full-stack applications.
        </p>
      </div>
    </div>

    <div class="max-w-sm mx-auto text-white bg-neutral-700 shadow-lg rounded-lg overflow-hidden">
      <div class="p-4">
        <h2 class="text-xl font-semibold">Getting Started with Tailwind CSS</h2>
        <p class="mt-2">by Jane Smith</p>
        <p class="mt-3 text-sm">
          Tailwind CSS is a utility-first CSS framework that allows developers to build custom designs without writing CSS. This blog covers the fundamentals and how to integrate it into your projects.
        </p>
      </div>
    </div>

    <div class="max-w-sm mx-auto text-white bg-neutral-700 shadow-lg rounded-lg overflow-hidden">
      <div class="p-4">
        <h2 class="text-xl font-semibold">Introduction to Node.js</h2>
        <p class="mt-2">by Michael Lee</p>
        <p class="mt-3 text-sm">
          Node.js is a powerful runtime environment for executing JavaScript on the server side. This blog explores its features, advantages, and how to get started with Node.js development.
        </p>
      </div>
    </div>
  </div>
</div>

  )
}

export default Blog