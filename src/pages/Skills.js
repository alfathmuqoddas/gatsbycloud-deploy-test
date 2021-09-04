import React from "react"
//import { Link } from "gatsby"

export default function Skills() {
  return (      
        <div className="py-28 bg-gray-900" id="skills">
		  <div className="container m-auto px-4 md:px-20">
			<h1 className="text-5xl font-bold m-0 text-white">Skills</h1>
			<h3 className="text-2xl mb-0 text-white font-light">Core</h3>
			<div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-4">
			  <div className="card p-2 text-white text-center bg-gray-700">
			    <h1><i className="fab fa-js m-0 text-7xl"></i></h1>
			    <h3 className="m-0">JavaScript</h3>
			  </div>
			  <div className="card p-2 text-white text-center bg-gray-700">
			    <h1><i className="fab fa-css3-alt m-0 text-7xl"></i></h1>
			    <h3 className="m-0">CSS</h3>
			  </div>
			  <div className="card p-2 text-white text-center bg-gray-700">
			    <h1><i className="fab fa-html5 m-0 text-7xl"></i></h1>
			    <h3 className="m-0">HTML5</h3>
			  </div>
			</div>
			
			<h3 className="text-2xl mb-0 text-white font-light">Library & Framework</h3>
			<div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-4">  
			  <div className="card p-2 text-white text-center bg-gray-700">
			    <h1>
			       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 54 33" className="w-16 my-4 mx-auto">
					  <g clipPath="url(#prefix__clip0)">
						<path fill="#06B6D4" fill-rule="evenodd" d="M27 0c-7.2 0-11.7 3.6-13.5 10.8 2.7-3.6 5.85-4.95 9.45-4.05 2.054.513 3.522 2.004 5.147 3.653C30.744 13.09 33.808 16.2 40.5 16.2c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C36.756 3.11 33.692 0 27 0zM13.5 16.2C6.3 16.2 1.8 19.8 0 27c2.7-3.6 5.85-4.95 9.45-4.05 2.054.514 3.522 2.004 5.147 3.653C17.244 29.29 20.308 32.4 27 32.4c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C23.256 19.31 20.192 16.2 13.5 16.2z" clip-rule="evenodd"/>
					  </g>
					  <defs>
						<clipPath id="prefix__clip0"><path fill="#fff" d="M0 0h54v32.4H0z"/></clipPath>
					  </defs>
					</svg>
                </h1>
			    <h3 className="m-0">Tailwind CSS</h3>
			  </div>
			  <div className="card p-2 text-white text-center bg-gray-700">
			    <h1><i className="fab fa-bootstrap m-0 text-7xl"></i></h1>
			    <h3 className="m-0">Bootstrap CSS</h3>
			  </div>
			  <div className="card p-2 text-white text-center bg-gray-700">
			    <h1><i className="fab fa-react m-0 text-7xl"></i></h1>
			    <h3 className="m-0">React JS</h3>
			  </div>
			  <div className="card p-2 text-white text-center bg-gray-700">
			    <h1><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" focusable="false" className="w-16 mx-auto">
				  <circle cx="14" cy="14" r="14" fill="#639"/>
				  <path fill="#fff" d="M6.2 21.8C4.1 19.7 3 16.9 3 14.2L13.9 25c-2.8-.1-5.6-1.1-7.7-3.2zm10.2 2.9L3.3 11.6C4.4 6.7 8.8 3 14 3c3.7 0 6.9 1.8 8.9 4.5l-1.5 1.3C19.7 6.5 17 5 14 5c-3.9 0-7.2 2.5-8.5 6L17 22.5c2.9-1 5.1-3.5 5.8-6.5H18v-2h7c0 5.2-3.7 9.6-8.6 10.7z"/>
				</svg></h1>
			    <h3 className="m-0">Gatsby JS</h3>
			  </div>
			</div>
			
			<h3 className="text-2xl mb-0 text-white font-light">Version Control</h3>
			<div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-4">
			  <div className="card p-2 text-white text-center bg-gray-700">
			    <h1><i className="fab fa-git m-0 text-7xl"></i></h1>
			    <h3 className="m-0">GIT</h3>
			  </div>
			  <div className="card p-2 text-white text-center bg-gray-700">
			    <h1><i className="fab fa-github m-0 text-7xl"></i></h1>
			    <h3 className="m-0">Github</h3>
			  </div>
			</div>
		  </div>
		</div>
  )
}
