import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = () => {
  return (
    <nav className="h-[50px] flex justify-between px-5 bg-gray-500 items-center text-white">
      <span>
        <Link
          to="/"
          className="mr-4"
        >
          Products
        </Link>
        <Link to="/about">About</Link>
      </span>
    </nav>
  )
}

export default Navigation
