import React from "react"
import { Link } from "gatsby"

var linkStyle = "inline-block pr-8 font-semibold text-blue-900 text-opacity-50 hover:text-opacity-100 text-sm"

export default function Navbar() {
  return (
  <div className="container mx-auto px-4 md:px-20 py-4">
    <div className="flex gap-4 items-center justify-between">
      <Link to="/tour-ink"><h1 className="text-xl">TourGo</h1></Link>
      <div className="hidden md:flex">
        <ul>
          <li className={linkStyle}><a href="#">Home</a></li>
          <li className={linkStyle}><a href="#searcSection">Booking Form</a></li>
          <li className={linkStyle}><a href="#category">Category</a></li>
          <li className={linkStyle}><a href="#foryou">About Us</a></li>
        </ul>
      </div>
      <div className="hidden md:flex items-center">
        <a href="#"><div className="inline-block mr-4 font-semibold text-blue-900 text-opacity-50 hover:text-opacity-100 text-sm">Login</div></a>
        <a href="#"><div className="inline-block px-6 py-2 font-semibold bg-blue-800 hover:bg-blue-900 text-white rounded-lg text-sm">Sign Up</div></a>
      </div>
      <button className="md:hidden text-xl"><i className="fas fa-bars"></i></button>
    </div>
  </div>
  )
}
