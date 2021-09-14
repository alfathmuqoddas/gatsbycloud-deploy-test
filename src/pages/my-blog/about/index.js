import React from "react"
import Helmet from "react-helmet"
import Layout from "../Layout"


export default function About() {
  return (
    <>
      <Helmet>
        <title>About | My Blog</title>
        <link rel="shortcut icon" href="./favicon.ico" type="image/x-icon" />
      </Helmet>
      <Layout>
        <header className="container mx-auto px-4">
          <h1>About</h1>
        </header>
      </Layout>
    </>
  )
}
