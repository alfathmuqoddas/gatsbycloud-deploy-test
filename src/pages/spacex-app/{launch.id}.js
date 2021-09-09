import React from "react"
import Layout from "./Layout"
import { graphql } from "gatsby"

export default function launchDetails({ data }) {
  
  const launch = data.spacex.launch
  
  return (
    <div>
      <Layout>
		  <div className="">
			<div className="container mx-auto px-4 md:px-20 pt-28 pb-24">
			  <h1>{launch.mission.name}</h1>
			</div>
		  </div>
	  </Layout>
    </div>
  )
}

export const query = graphql`
query ($id: String) {
  spacex{
    launch(id: $id)({
      mission_name
      details
      launch_date_utc
      launch_site {
        site_name_long
      }
      id
      rocket {
        rocket_name
        second_stage {
          payloads {
            payload_mass_kg
          }
        }
      }
    }
  }
}
