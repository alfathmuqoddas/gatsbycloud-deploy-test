import React from "react"
import Helmet from "react-helmet"
import Layout from "../Layout"


export default function Post() {
  return (
    <>
      <Helmet>
        <title>Post | My Blog</title>
        <link rel="shortcut icon" href="./favicon.ico" type="image/x-icon" />
      </Helmet>
      <Layout>
        <header className="container mx-auto px-4">
          <h1>All Post</h1>
        </header>
      </Layout>
    </>
  )
}
