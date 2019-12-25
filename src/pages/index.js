import React, { useState } from "react"

import 'intersection-observer';
import Observer from "react-intersection-observer"
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
  const [homeIsVisible, setHomeIsVisible] = useState("enabled")
  const [aboutIsVisible, setAboutIsVisible] = useState("disabled")
  const [projectIsVisible, setProjectIsVisible] = useState("disabled")
  const [contactIsVisible, setContactIsVisible] = useState("disabled")
  return (
    <Layout>
      <SEO title="Web Developer, CSS Wizard" />
      <Observer
        onChange={event => {
          setHomeIsVisible(event ? "enabled" : "disabled")
        }}
        className={
          homeIsVisible === "enabled"
            ? "animation-enabled"
            : "animation-disabled"
        }
      >
        <Home />
      </Observer>
      <Separator />
      <Observer
        onChange={event => {
          setAboutIsVisible(event ? "enabled" : "disabled")
        }}
        className={
          aboutIsVisible === "enabled"
            ? "animation-enabled"
            : "animation-disabled"
        }
      >
        <About />
      </Observer>
      <Separator />
      <Observer
        onChange={event => {
          setProjectIsVisible(event ? "enabled" : "disabled")
        }}
        className={
          projectIsVisible === "enabled"
            ? "animation-enabled"
            : "animation-disabled"
        }
      >
        <Projects />
      </Observer>
      <Separator />
      <Observer
        onChange={event => {
          setContactIsVisible(event ? "enabled" : "disabled")
        }}
        className={
          contactIsVisible === "enabled"
            ? "animation-enabled"
            : "animation-disabled"
        }
      >
        <Contact />
      </Observer>
      <RewardIndicator />
      <RewardContainer />
    </Layout>
  )
}

export default IndexPage
