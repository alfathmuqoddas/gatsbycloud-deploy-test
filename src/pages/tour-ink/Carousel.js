import React from "react"

export default function Carousel() {
  return (
  <div>
    <div className="container mx-auto px-4 md:px-20">
      <div className="w-full carousel">
	  <div id="slide1" className="relative w-full carousel-item">
		<img src="https://picsum.photos/id/500/960/540" className="w-full rounded-3xl object-cover" style={{height:"540px"}}/>
		<div className="absolute w-full text-center">
		  <h4 className="font-bold mb-0">All You Need Is Tour.Ink</h4>
		  <h1 className="text-5xl m-0 font-bold">Explore Beautiful Places</h1>
		</div> 
		<div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
		  <a href="#slide4" className="btn btn-circle">❮</a> 
		  <a href="#slide2" className="btn btn-circle">❯</a>
		</div>
	  </div> 
	  <div id="slide2" className="relative w-full carousel-item">
		<img src="https://picsum.photos/id/501/960/540" className="w-full rounded-3xl object-cover" style={{height:"540px"}} />
		<div className="absolute w-full text-center">
		  <h4 className="font-bold mb-0 text-blue-400">All You Need Is Tour.Ink</h4>
		  <h1 className="text-5xl m-0 font-bold text-white">Enjoy Exciting Destinations</h1>
		</div> 
		<div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
		  <a href="#slide1" className="btn btn-circle">❮</a> 
		  <a href="#slide3" className="btn btn-circle">❯</a>
		</div>
	  </div> 
	  <div id="slide3" className="relative w-full carousel-item">
		<img src="https://picsum.photos/id/502/960/540" className="w-full rounded-3xl object-cover" style={{height:"540px"}} /> 
		<div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
		  <a href="#slide2" className="btn btn-circle">❮</a> 
		  <a href="#slide4" classname="btn btn-circle">❯</a>
		</div>
	  </div> 
	  <div id="slide4" className="relative w-full carousel-item">
		<img src="https://picsum.photos/id/503/960/540" className="w-full rounded-3xl object-cover" style={{height:"540px"}} /> 
		<div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
		  <a href="#slide3" className="btn btn-circle">❮</a> 
		  <a href="#slide1" className="btn btn-circle">❯</a>
		</div>
	  </div>
	</div>
    </div>
  </div>
  )
}
