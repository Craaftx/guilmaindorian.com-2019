import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Separator from "../components/separator"
import Home from "../components/home"
import About from "../components/about"
import Projects from "../components/projects"
import Contact from "../components/contact"
import RewardIndicator from "../components/rewardIndicator"
import RewardContainer from "../components/rewardContainer"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Guilmain Dorian" />
      <Home />
      <Separator />
      <About style={{ animationPlayState: "paused" }} />
      <Separator />
      <Projects style={{ animationPlayState: "paused" }}  />
      <Separator />
      <Contact style={{ animationPlayState: "paused" }}  />
      <RewardIndicator />
      <RewardContainer />
    </Layout>
  )
}

export default IndexPage
