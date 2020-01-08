import React, { useState, useRef, useEffect } from "react"

import "intersection-observer"
import Observer from "react-intersection-observer"
import Layout from "../components/layout"
import SEO from "../components/seo"

import Navigation from "../components/navigation"
import Separator from "../components/separator"
import Home from "../components/home"
import About from "../components/about"
import Projects from "../components/projects"
import Contact from "../components/contact"
import RewardIndicator from "../components/rewardIndicator"
import RewardContainer from "../components/rewardContainer"
import Medal from "../components/medal"

const IndexPage = () => {
  const [homeIsVisible, setHomeIsVisible] = useState("enabled")
  const [aboutIsVisible, setAboutIsVisible] = useState("disabled")
  const [projectIsVisible, setProjectIsVisible] = useState("disabled")
  const [contactIsVisible, setContactIsVisible] = useState("disabled")

  const [haveAllMedals, setHaveAllMedals] = useState()
  const [medals, setMedals] = useState([null, null, null, null])

  const medalElement = useRef()
  const layout = useRef()

  useEffect(() => {
    const storedMedals = window.localStorage.getItem("gd_medals")
    if (storedMedals) {
      setMedals(JSON.parse(storedMedals))
      if (
        storedMedals[0] &&
        storedMedals[1] &&
        storedMedals[2] &&
        storedMedals[3]
      ) {
        setHaveAllMedals(true)
      }
    } else {
      window.localStorage.setItem(
        "gd_medals",
        JSON.stringify([null, null, null, null])
      )
    }
  }, [])

  const animateMedal = () => {
    medalElement.current.style.display = "block"
    medalElement.current.style.opacity = "1"
    setTimeout(function() {
      medalElement.current.style.opacity = "0"
    }, 6000)
    setTimeout(function() {
      medalElement.current.style.display = "none"
    }, 7000)
  }

  const handleMedals = index => {
    const storedMedals = JSON.parse(window.localStorage.getItem("gd_medals"))
    if (storedMedals[index] !== true) {
      animateMedal()
      setMedals(storedMedals)
      storedMedals[index] = true
      window.localStorage.setItem("gd_medals", JSON.stringify(storedMedals))
      if (
        storedMedals[0] &&
        storedMedals[1] &&
        storedMedals[2] &&
        storedMedals[3]
      ) {
        setHaveAllMedals(true)
      }
    }
  }

  const handleChangeSkins = (astronaut, rocket) => {
    let target = null
    if (astronaut) {
      target = "character"
      const targetItems = Array.from(document.querySelectorAll(`.${target}`))
      targetItems.map(character => character.setAttribute("class", target))
      if (astronaut !== "skin_vanilla") {
        targetItems.map(characterNode => characterNode.classList.add(astronaut))
      }
    }
    if (rocket) {
      target = "rocket"
      const targetItems = Array.from(document.querySelectorAll(`.${target}`))
      targetItems.map(rocket => rocket.setAttribute("class", target))
      if (rocket !== "skin_vanilla") {
        targetItems.map(rocketNode => rocketNode.classList.add(rocket))
      }
    }
  }

  return (
    <Layout ref={layout}>
      <SEO title="Web Developer, CSS Wizard" />
      <Navigation />
      <div
        style={{ display: "none", opacity: "0", transition: "1s" }}
        ref={medalElement}
      >
        <Medal />
      </div>
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
        <Home
          obtainMedal={() => {
            handleMedals(0)
          }}
        />
      </Observer>
      <Separator />
      <Observer
        id="about"
        onChange={event => {
          setAboutIsVisible(event ? "enabled" : "disabled")
        }}
        className={
          aboutIsVisible === "enabled"
            ? "animation-enabled"
            : "animation-disabled"
        }
      >
        <About
          obtainMedal={() => {
            handleMedals(1)
          }}
        />
      </Observer>
      <Separator />
      <Observer
        id="projects"
        onChange={event => {
          setProjectIsVisible(event ? "enabled" : "disabled")
        }}
        className={
          projectIsVisible === "enabled"
            ? "animation-enabled"
            : "animation-disabled"
        }
      >
        <Projects
          obtainMedal={() => {
            handleMedals(2)
          }}
        />
      </Observer>
      <Separator />
      <Observer
        id="contact"
        onChange={event => {
          setContactIsVisible(event ? "enabled" : "disabled")
        }}
        className={
          contactIsVisible === "enabled"
            ? "animation-enabled"
            : "animation-disabled"
        }
      >
        <Contact
          obtainMedal={() => {
            handleMedals(3)
          }}
        />
      </Observer>
      {haveAllMedals ? (
        <>
          <Separator />
          <RewardContainer changeSkins={handleChangeSkins} />
        </>
      ) : (
        <RewardIndicator medals={medals} />
      )}
    </Layout>
  )
}

export default IndexPage
