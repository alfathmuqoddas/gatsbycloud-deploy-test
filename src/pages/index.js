import React from "react"
import { Helmet } from "react-helmet"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import { StaticImage } from "gatsby-plugin-image"
import FeaturedProject from "./FeaturedProject"
import Skills from "./Skills"

export default function Home() {
  return (
  <div>
    <Helmet>
        <title>Alfath Muqoddas</title>
        <link rel="shortcut icon" href="../static/icons/favicon.ico" type="image/x-icon" />
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" rel="stylesheet" />
    </Helmet>
    <Layout>
		<div className="bg-gray-900">
		  <div className="container mx-auto px-4 md:px-20 py-32 flex flex-col md:flex-row gap-x-8 gap-y-20 items-center justify-between">
		    <div className="w-full md:w-6/12">
			  <h1 className="text-5xl font-bold mt-0 text-white">Hello, I'm <span className="text-blue-800">ALFATH MUQODDAS</span> I'm a Front-End Developer</h1>
			  <div className="text-xl font-light text-white">Welcome to my Portfolio Page</div>
	        </div>
			<StaticImage
		      src="../images/undraw_adventure_4hum.svg"
			  width={500}
			  quality={95}
			  formats={["AUTO", "WEBP", "AVIF"]}
			  alt="hero-img"
			  />
		  </div>
		</div>
		<FeaturedProject />
		<Skills />
    </Layout>
  </div>
  )
}
