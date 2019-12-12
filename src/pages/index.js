import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Home from "../components/home";
import About from "../components/about";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Home />
    <About />
  </Layout>
)

export default IndexPage
