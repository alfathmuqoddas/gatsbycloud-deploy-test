import React from "react"

const places = ["Lotus temple", "Eiffel Tower", "Batu Gong", "Prambanan Temple", "Borobudur Temple", "Taman Sari", "Labuan Bajo", "Seminyak Beach", "The Grand Palace", "Angkor Wat"];

export default function PopularSearch() {
  return (
  <div id="searcSection">
    <div className="container mx-auto px-4 md:px-20 pb-8">
      <form className="flex flex-col md:flex-row gap-y-4 justify-between md:mx-20 border py-6 px-8 rounded-2xl transform md:-translate-y-12 backdrop-filter backdrop-blur-lg">
        <div className="md:border-r pr-12">
          <label for="Location"><i className="fas fa-map-marker-alt"></i> Location<br />
		    <input type="text" id="Location" placeholder="Where do you want to go?" className="md:mt-4"/>
		  </label>
		</div>
		<div className="md:border-r pr-12">
		  <label for="Date"><i className="fas fa-calendar-day"></i> Date<br />
		    <input type="date" id="Date" className="md:mt-4"/>
		  </label>
        </div>
        <div>
		  <label for="Guest"><i className="fas fa-user"></i> Guest<br />
		    <input type="number" min="1" max="10" id="Guest" placeholder="Add Guest" className="w-28 md:mt-4"/>
		  </label>
        </div>
        <div>
          <input type="submit" value="Search" className="h-full rounded-lg text-white px-4 bg-blue-900" />
        </div>
      </form>
      <h1 className="text-center">Popular Search</h1>
      <div className="text-center">
        {places.map(place => (<button className="btn btn-ghost">{ place }</button>))}
      </div>
    </div>
  </div>
  )
}
