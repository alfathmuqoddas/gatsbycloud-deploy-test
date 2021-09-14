import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "./Layout"

export default function Home({ data }) {
	
  const launches = data.spacex.launchesPast
	
  return (
      <Layout>
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 py-20">
          {launches.map(launch =>(
	       <div>
			 <img src={launch.links.mission_patch_small} alt="photos-not-available" className="w-100" loading="lazy" />
		     <Link to={launch.id}><h3 className="text-center mb-0 hover:text-blue-500">{launch.mission_name}</h3></Link>
		     <p className="text-center">{launch.launch_year}</p>
		   </div>
		  ))}
        </div>
      </Layout>
  )
}

export const query = graphql`
query MyQuery {
  spacex {
    launchesPast {
      mission_name
      id
      launch_year
      links {
        mission_patch_small
      }
    }
  }
}
`
