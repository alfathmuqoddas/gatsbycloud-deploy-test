import React from "react"
import { Link } from "gatsby"
//import { GatsbyImage } from "gatsby-plugin-image"

const projects = [
  {
	  photos:"/firebase-task.jpg",
	  title:"Firebase Task",
	  desription:"Full Stack web app for creating and tracking tasks build with React and Firebase Firestore Database and Firebase Authentication",
	  liveLink:"https://alfathmuqoddas.github.io/react-movie-query/#/firebase-app",
	  codeLink:"https://github.com/alfathmuqoddas/react-movie-query",
  },
  {
	  photos:"/react-movie-query.jpg",
	  title:"React Movie App",
	  desription:"Web app for searching info about a movie, build with React, React Router, and Bootstrap",
	  liveLink:"https://alfathmuqoddas.github.io/react-movie-query/#/movie",
	  codeLink:"https://github.com/alfathmuqoddas/react-movie-query",
  },
  {
	  photos:"/weather-forecast-sc.jpg",
	  title:"Weather Forecast App",
	  desription:"Minimalist and elegant weather forecast app, built with vanilla JavaScript and OpenWeatherMap API",
	  liveLink:"https://alfathmuqoddas.github.io/weather-forecast",
	  codeLink:"https://github.com/alfathmuqoddas/weather-forecast",
  },
  {
	  photos:"/iss-tracker.jpg",
	  title:"ISS Tracker App",
	  desription:"Real time ISS tracker website, built with Vanilla JavaScript, Rest API, and Leaflet JS ",
	  liveLink:"https://alfathmuqoddas.github.io/iss-tracker",
	  codeLink:"https://github.com/alfathmuqoddas/iss-tracker",
  },
  {
	  photos:"/greencloud-sc.jpg",
	  title:"GreenCloud",
	  desription:"Landing page based on DigitalOcean website built with HTML5 and TailwindCSS",
	  liveLink:"https://alfathmuqoddas.github.io/green-cloud",
	  codeLink:"https://github.com/alfathmuqoddas/green-cloud",
  },
]

export default function FeaturedProject() {
  return (      
        <div className="py-28 bg-gray-800" id="project">
		  <div className="container m-auto px-4 md:px-20">
			<h1 className="text-5xl font-semibold mt-0 text-white pb-8">Featured Project</h1>
			<div className="grid grid-cols-1 md:grid-cols-3 gap-12">
		      {projects.map(project => (
				  <div className="text-white bg-gray-700 shadow-lg rounded-2xl overflow-hidden">
				    <img src={project.photos} alt="project-photos" className="" />
				    <div className="p-4">
				      <h3 className="text-center mt-0">{project.title}</h3>
				      <p>{project.desription}</p>
				      <div className="mt-2">
				        <button className="btn btn-ghost mr-4"><a href={project.codeLink} className="inline-block" rel="noreferrer" target="_blank"><i className="fab fa-github"></i> Source Code</a></button>
				        <button className="btn btn-ghost"><a href={project.liveLink} className="inline-block" rel="noreferrer" target="_blank">Live Demo</a></button>
				      </div>
				    </div>
				  </div>
			  ))}
		    </div>
		  </div>
		</div>
  )
}
