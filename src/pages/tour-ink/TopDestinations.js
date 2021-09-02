import React from "react"
import { StaticImage } from "gatsby-plugin-image"

const destinations = [
	{
		photos: "https://picsum.photos/seed/cjwc0/200/150",
		title: "Snow Hill",
		description: "Quisque dapibus leo porttitor. Aenean placerat commodo",
		location: "Inari, Finland",
		price: "$150/package",
	},
	{
		photos: "https://picsum.photos/seed/wecsc3/200/150",
		title: "Sea Horizon",
		description: "Quisque dapibus leo porttitor. Aenean placerat commodo",
		location: "Johor, Malaysia",
		price: "$150/package",
	},
	{
		photos: "https://picsum.photos/seed/qwjkcc7/200/150",
		title: "Gunung Kidul",
		description: "Quisque dapibus leo porttitor. Aenean placerat commodo",
		location: "Johor, Malaysia",
		price: "$150/package",
	},
	{
		photos: "https://picsum.photos/seed/wqc5/200/150",
		title: "Manhattan Bridge",
		description: "Quisque dapibus leo porttitor. Aenean placerat commodo",
		location: "New York, USA",
		price: "$150/package",
	},
	{
		photos: "https://picsum.photos/seed/wlw5/200/150",
		title: "Kuta Beach",
		description: "Quisque dapibus leo porttitor. Aenean placerat commodo",
		location: "Bali, Indonesia",
		price: "$150/package",
	},
	{
		photos: "https://picsum.photos/seed/qwc9/200/150",
		title: "Singapore MArina",
		description: "Quisque dapibus leo porttitor. Aenean placerat commodo",
		location: "Singapore",
		price: "$150/package",
	},
	{
		photos: "https://picsum.photos/seed/klsc0/200/150",
		title: "Snow Forest",
		description: "Quisque dapibus leo porttitor. Aenean placerat commodo",
		location: "Hol, Norway",
		price: "$150/package",
	},
	{
		photos: "https://picsum.photos/seed/wc8/200/150",
		title: "Newsports Beach",
		description: "Quisque dapibus leo porttitor. Aenean placerat commodo",
		location: "California, US",
		price: "$150/package",
	},
]

export default function TopDestinations() {
  return (
  <div className="pt-32 pb-20">
    <div className="container mx-auto px-4 md:px-20 pb-20">
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
          <h1 className="text-5xl">Why Choose Tour.Ink?</h1>
          <p>Vestibulum tempor pellentesque est, et egestas ligula pharetra vitae. 
          Nullam venenatis odio purus, ac ultricies libero sollicitudin sit amet. 
          Donec aliquam augue neque, feugiat convallis ipsum imperdiet ut. 
          Cras at tincidunt sem, vitae porta nulla. Nulla id leo magna. 
          Integer magna ante, sagittis quis mauris nec, consectetur sodales eros. 
          Integer sed ornare diam. Nunc viverra vehicula lectus nec elementum.</p>
        </div>
      </div>
    </div>
    <div className="container mx-auto px-4 md:px-20 pt-16">
      <h1 className="text-center my-2 text-5xl" id="foryou">Top Destinations For You</h1>
      <p className="text-center">Much places suits your mood. Enjoy somewhere interesting and enjoy the vides</p>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pt-20">
        { destinations.map(destination => (
		    <div className="card p-2 shadow-md">
		      <img src={destination.photos} alt="top-destinations-img" className="rounded-xl"/>
		      <h3>{destination.title}</h3>
		      <p>{destination.description}</p>
		      <div className="inline-block pt-2"><i className="fas fa-map-marker-alt"></i> {destination.location}</div>
		      <div className="inline-block"><i className="fas fa-comment-dollar"></i> {destination.price}</div>
		    </div>))}
      </div>
      <div className="text-center mt-16"><button><div className="inline-block px-6 py-2 font-semibold bg-blue-800 hover:bg-blue-900 text-white rounded-lg text-lg">View All Destinations</div></button></div>
    </div>
    <div className="bg-blue-900">
      <div className="container mx-auto px-4 md:px-20 py-20 mt-16 text-center text-white ">
        <h1 className="text-5xl mt-0">Download the Tour.Ink app, now!</h1>
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
