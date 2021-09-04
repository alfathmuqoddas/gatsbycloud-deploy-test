import React from "react"
//import { Link } from "gatsby"
//import { GatsbyImage } from "gatsby-plugin-image"

const projects = [
  {
	  photos:"/weather-forecast-sc.jpg",
	  title:"Weather Forecast App",
	  desription:"Minimalist weather forecast app, built with vanilla JavaScript",
	  liveLink:"https://alfathmuqoddas.github.io/weather-forecast",
	  codeLink:"https://github.com/alfathmuqoddas/weather-forecast",
  },
  {
	  photos:"/iss-tracker.jpg",
	  title:"ISS Tracker App",
	  desription:"Real time ISS tracker website, built with Vanilla JavaScript and LeafletJS",
	  liveLink:"https://alfathmuqoddas.github.io/iss-tracker",
	  codeLink:"https://github.com/alfathmuqoddas/iss-tracker",
  },
  {
	  photos:"/tour-ink-sc.jpg",
	  title:"Tour.Ink",
	  desription:"Travel landing page built with React + GatsbyJS",
	  liveLink:"https://alfathmuqoddas.gatsbyjs.io/tour-ink",
	  codeLink:"https://github.com/alfathmuqoddas/tour-ink",
  },
  {
	  photos:"/greencloud-sc.jpg",
	  title:"GreenCloud",
	  desription:"Landing page based on DigitalOcean official website design",
	  liveLink:"https://alfathmuqoddas.github.io/green-cloud",
	  codeLink:"https://github.com/alfathmuqoddas/green-cloud",
  },
  {
	  photos:"/bbc-clone-sc.jpg",
	  title:"BBC Clone",
	  desription:"Replica of BBC News Website built with TailwindCSS",
	  liveLink:"https://alfathmuqoddas.github.io/bbc-clone",
	  codeLink:"https://github.com/alfathmuqoddas/bbc-clone",
  },
  {
	  photos:"/travelmate-sc.jpg",
	  title:"TravelMate",
	  desription:"Travel landing page built with BootstrapCSS",
	  liveLink:"https://alfathmuqoddas.github.io/travelmate",
	  codeLink:"https://github.com/alfathmuqoddas/travelmate",
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
