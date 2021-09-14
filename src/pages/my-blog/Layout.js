import React from "react"
import Navbar from "./Navbar"
import "./Layout.css"

export default function Layout({ children }) {
  return (
    <div>
      <Navbar />
      {children}
      <footer className="py-20 bg-blue-50">
        <div className="container mx-auto px-4 md:px-20 text-center">
          <p>My Blog Copyright 2021</p>
        </div>
      </footer>
    </div>
  )
}
