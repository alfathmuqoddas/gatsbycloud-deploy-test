import React from "react"
import { Helmet } from "react-helmet"
import Carousel from "./Carousel"
import PopularSearch from "./PopularSearch"
import Categories from "./Categories"
import TopDestinations from "./TopDestinations"
import Layout from "./Layout"

export default function TourInkHomePage() {
  return (
  <div>
    <Helmet>
        <title>Tour.Ink</title>
        <link rel="shortcut icon" href="../static/icons/favicon.ico" type="image/x-icon" />
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" rel="stylesheet" />
    </Helmet>
    <Layout>
    <Carousel />
    <PopularSearch />
    <Categories />
    <TopDestinations />
    </Layout>
  </div>
  )
}
