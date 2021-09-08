import React from "react"
import Layout from "./Layout"
import { graphql } from "gatsby"

export default function Destinations({ data }) {
  
  return (
    <div>
      <Layout>
		  <div className="">
			<div className="container mx-auto px-4 md:px-20 pt-28 pb-24">
			  <img src={data.destinationsJson.photos} className="w-96 mx-auto" />
			  <h1 className="font-semibold text-center">{data.destinationsJson.title}</h1>
			  <h2 className="font-bold text-center">{data.destinationsJson.location}</h2>
			  <h3 className="text-center">{data.destinationsJson.description}</h3>
			  <p className="text-center">Price: {data.destinationsJson.price}</p>
			  <div className="text-center pt-4"><button className="btn btn-primary">Book Now</button></div>
			</div>
		  </div>
	  </Layout>
    </div>
  )
}

export const query = graphql`
query($id: String) {
  destinationsJson(id: { eq: $id }) {
    description
    link
    location
    photos
    price
    title
  }
}
`
