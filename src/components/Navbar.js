import React from "react"

const redHover = ["hover:text-blue-800"];

export default function Navbar() {
  return (
    <section className="bg-transparent relative bg-gray-900 w-full">
		<nav className="text-white container mx-auto py-4 px-4 md:px-20 flex items-center justify-between">
		  <div className="links flex font-bold gap-x-4">
			<a href="#"><div className={redHover}>HOME</div></a>
			<a href="#project"><div className={redHover}>PROJECTS</div></a>
			<a href="#skills"><div className={redHover}>SKILLS</div></a>
			<a href="#about"><div className={redHover}>ABOUT</div></a>
		  </div>
		</nav>
    </section>
  )
}
