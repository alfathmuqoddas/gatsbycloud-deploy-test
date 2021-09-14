import React from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"

export default function Layout({ children }) {
  
  return (
    <div className="font-inter bg-white text-black">
	  <Navbar />
	  { children }
	  <Footer />
    </div>
  )
}
