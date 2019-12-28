import React, { useRef, useState, useEffect } from "react"
import PropTypes from "prop-types"

let windowInnerWidth = window.innerWidth
let pageX

const Home = ({ obtainMedal }) => {
  const layerOne = useRef()
  const layerTwo = useRef()
  const layerThree = useRef()
  const layerFour = useRef()
  const [cardIsHidden, setCardIsHidden] = useState(true)

  const handleParallax = e => {
    pageX = e.clientX - windowInnerWidth / 2
  }

  useEffect(() => {
    let ref
    const step = () => {
      layerOne.current.style.transform = `translateX(-${50 + pageX / 200}%)`
      layerTwo.current.style.transform = `translateX(-${50 + pageX / 400}%)`
      layerThree.current.style.transform = `translateX(-${50 + pageX / 800}%)`
      layerFour.current.style.transform = `translateX(-${50 + pageX / 1200}%)`
      ref = requestAnimationFrame(step)
    }
    ref = requestAnimationFrame(step)
    return () => {
      cancelAnimationFrame(ref)
    }
  }, [])

  return (
    <section
      className="scene"
      onMouseMove={e => {
        handleParallax(e)
      }}
    >
      <div className="noise" />
      <div className="scene-content">
        <div className="mountains-wrapper">
          <div className="mountains layer-1" ref={layerOne}>
            <div className="mountain mountain-1" />
            <div className="mountain mountain-2" />
            <div className="mountain mountain-3" />
            <div className="mountain mountain-4" />
            <div className="mountain mountain-5" />
          </div>
          <div className="mountains-2 layer-2" ref={layerTwo}>
            <div className="mountain mountain-6" />
            <div className="mountain mountain-7" />
            <div className="mountain mountain-8" />
            <div className="mountain mountain-9" />
            <div className="mountain mountain-10" />
          </div>
        </div>
        <div className="light" />
        <div className="planets-wrapper">
          <div className="planets layer-3" ref={layerThree}>
            <div className="planet-1">
              <div className="shadow" />
              <div className="body" />
            </div>
            <div className="planet-2">
              <div className="shadow" />
              <div className="body" />
              <ul className="asteroid">
                <li />
                <li />
                <li />
                <li />
                <li />
              </ul>
            </div>
            <div className="planet-3">
              <div className="shadow" />
              <div className="body" />
              <ul className="asteroid">
                <li />
                <li />
                <li />
                <li />
                <li />
              </ul>
            </div>
          </div>
        </div>
        <ul className="stars layer-3" ref={layerFour}>
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
        </ul>
        <div className="rocket-wrapper">
          <div className="rocket-route">
            <div
              className="rocket"
              role="button"
              onClick={() => {
                setCardIsHidden(false)
              }}
            >
              <div className="reactor" />
              <div className="wing wing-1" />
              <div className="wing wing-2" />
              <div className="body" />
              <div className="glass" />
              <div className="flame" />
              <div className="reactor-2" />
            </div>
          </div>
        </div>
        <div className="text-wrapper" id="scene-text">
          <span className="animated">
            I have no special talent. I am only passionately
          </span>
          <b className="color-primary">&nbsp;curious</b>
        </div>
      </div>
      <div
        className="secret-wrapper"
        style={{ display: cardIsHidden ? "none" : "block" }}
      >
        <div className="secret">
          <div className="small-scene">
            <ul className="stars">
              <li />
              <li />
              <li />
              <li />
              <li />
              <li />
              <li />
              <li />
              <li />
              <li />
            </ul>
            <div className="rocket">
              <div className="reactor" />
              <div className="wing wing-1" />
              <div className="wing wing-2" />
              <div className="body" />
              <div className="glass" />
              <div className="flame" />
              <div className="reactor-2" />
            </div>
          </div>
          <div className="text">
            <h4>Why do you click here ?</h4>
            <span
              role="button"
              onClick={() => {
                obtainMedal()
                setCardIsHidden(true)
              }}
            >
              I'm curious
            </span>
            <span
              role="button"
              onClick={() => {
                setCardIsHidden(true)
              }}
            >
              I'm smart
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

Home.propTypes = {
  obtainMedal: PropTypes.func,
}

export default Home
