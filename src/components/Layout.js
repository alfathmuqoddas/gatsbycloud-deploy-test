import React from "react"
import Navbar from "./Navbar"
import { Helmet } from "react-helmet"

export default function Layout({ children }) {
  return (
    <div className="layout font-inter">
      <Helmet>
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" rel="stylesheet" />
      </Helmet>
      <Navbar />
      <div className="content">
        { children }
      </div>
      <footer className="bg-gray-900 py-16 text-center">
        <p className="text-white">Copyright 2021 Alfath Muqoddas</p>
        <p className="text-white">Personal Portfolio Page</p>
        <div className="text-2xl text-white">
          <a href="https://github.com/alfathmuqoddas" target="_blank" rel="noreferrer" className="inline-block mr-4"><i className="fab fa-github hover:text-blue-400" aria-label="github"></i></a>
          <a href="https://www.linkedin.com/in/alfathmuqoddas" target="_blank" rel="noreferrer" className="inline-block mr-4"><i className="fab fa-linkedin hover:text-blue-400" aria-label="linkedid"></i></a>
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=alfath.muqoddas@gmail.com" target="_blank" rel="noreferrer"  className="inline-block"><i className="fas fa-envelope hover:text-blue-400" aria-label="e-mail"></i></a>
        </div>
      </footer>
    </div>
  )
}
