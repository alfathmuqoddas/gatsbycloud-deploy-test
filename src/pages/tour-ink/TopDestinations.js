import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

const destinations = [
	{
		photos: "https://source.unsplash.com/QAwciFlS1g4/480x360",
		title: "Eiffel Tower",
		link: "snow-hill",
		description: "Most famous and beautiful tower in the world in the middle of city of Paris",
		location: "Paris, France",
		price: "$150"
	},
	{
		photos: "https://source.unsplash.com/sAB4BWrQ4Y4/480x360",
		title: "Taj Mahal",
		link: "taj-mahal",
		description: "Beautiful mosque like building intended as giant mauseleoum for Mumtaz Mahal",
		location: "Agra, India",
		price: "$150"
	},
	{
		photos: "https://source.unsplash.com/E13mcj-2TLE/480x360",
		title: "Great Wall of China",
		link: "wall-china",
		description: "Enjoy beautiful scenery of the world famoust Great Wall of China",
		location: "Beijing, China",
		price: "$150"
	},
	{
		photos: "https://source.unsplash.com/DiBu1qTQQ8s/480x360",
		title: "Broklyn Bridge",
		link: "broklyn-bridge",
		description: "One of the most famous building in New York City",
		location: "New York, USA",
		price: "$150"
	},
	{
		photos: "https://source.unsplash.com/4hMET7vYTAQ/480x360",
		title: "Machu Picchu",
		link: "machu-picchu",
		description: "One of the most beautiful ancient building of the lost civilizations of Inca",
		location: "Cuzco, Peru",
		price: "$150"
	},
	{
		photos: "https://source.unsplash.com/IcOWqsXWL68/480x360",
		title: "Singapore Marina",
		link: "sg-marina",
		description: "Enjoy various attraction at Singapore Marina Bay",
		location: "Singapore",
		price: "$150"
	},
	{
		photos: "https://source.unsplash.com/xdGCrwu2CWM/480x360",
		title: "Sydney Opera House",
		link: "sydey-opera",
		description: "Most beautiful opera house in the world",
		location: "Sydney, Australia",
		price: "$150"
	},
	{
		photos: "https://source.unsplash.com/L1Ix5Q-PKBY/480x360",
		title: "Newport Beach",
		link: "newport-beach",
		description: "Beautiful beach with rocky cliff in California",
		location: "California, US",
		price: "$150"
	},
]

export default function TopDestinations({ data }) {
  return (
  <div className="py-20">
    <div className="container mx-auto px-4 md:px-20">
      <h1 className="text-center my-2 text-5xl" id="foryou">Top Destinations For You</h1>
      <p className="text-center">Much places suits your mood. Enjoy somewhere interesting and enjoy the vides</p>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pt-20">
        { destinations.map(destination => (
		    <div className="card p-2 shadow-md">
		      <img src={destination.photos} alt="top-destinations-img" className="rounded-xl"/>
		      <Link to={destination.link}><h3 className="hover:text-blue-900">{destination.title}</h3></Link>
		      <p>{destination.description}</p>
		      <div className="pt-2">
		        <button className="inline-block pr-4"><i className="fas fa-map-marker-alt"></i> {destination.location}</button>
		        <button className="inline-block"><i className="fas fa-comment-dollar"></i> {destination.price}</button>
		      </div>
		    </div>))}
      </div>
      <div className="text-center mt-16"><button><div className="inline-block px-6 py-2 font-semibold bg-blue-800 hover:bg-blue-900 text-white rounded-lg text-lg">View All Destinations</div></button></div>
    </div>
    <div className="container mx-auto px-4 md:px-20 py-20">
      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="w-full md:w-6/12">
          <StaticImage
		  src="../../images/undraw_adventure_4hum.svg"
		  width={500}
		  quality={95}
		  formats={["AUTO", "WEBP", "AVIF"]}
		  alt="A Gatsby astronaut"
		  />
        </div>
        <div className="text w-full md:w-6/12">
          <h1 className="text-5xl">Why Choose TourGo?</h1>
          <p>We provide the best service in the market, with Tour.Ink you can find your destinations fast and easy, supported with the best and the most skilled people makes the Tour.Ink is your number one go-to travel apps.</p>
        </div>
      </div>
    </div>
    <div className="bg-blue-900">
      <div className="container mx-auto px-4 md:px-20 py-20 mt-16 text-center text-white ">
        <h1 className="text-5xl mt-0">Download the TourGo app, now!</h1>
        <p className="text-lg text-white">Get the latest update from us and easier booking for sure</p>
        <div className="text-center mt-8">
          <button className="inline-block mr-8 btn btn-primary"><i className="fab fa-google-play text-xl"></i> Google Play</button>
          <button className="inline-block btn btn-primary"><i className="fab fa-app-store-ios text-xl"></i> App Store</button>
        </div>
      </div>
    </div>
  </div>
  )
}
