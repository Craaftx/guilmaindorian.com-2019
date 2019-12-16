import React, { useState } from "react"

const Home = () => {
  const [layerOne, setLayerOne] = useState("translateX(-50%)");
  const [layerTwo, setLayerTwo] = useState("translateX(-50%)");
  const [layerThree, setLayerThree] = useState("translateX(-50%)");
  const [layerFour, setLayerFour] = useState("translateX(-50%)");
  const [layerFifth, setLayerFifth] = useState("translateX(-50%)");

  const handleEvent = e => {
    const pageX = e.clientX - window.innerWidth / 2
    setLayerOne("translateX(-" + (50 + pageX / 200) + "%)");
    setLayerTwo("translateX(-" + (50 + pageX / 400) + "%)");
    setLayerThree("translateX(-" + (50 + pageX / 800) + "%)");
    setLayerFour("translateX(-" + (50 + pageX / 1200) + "%)");
    setLayerFifth("translateX(-" + (50 + pageX / 600) + "%)");
  }

  return (
    <section
      className="scene"
      id="scene-wrapper"
      onMouseMove={e => {
        handleEvent(e)
      }}
    >
      <div className="noise" />
      <div className="scene-content">
        <div className="mountains-wrapper" id="mountains-wrapper">
          <div
            className="mountains"
            id="layer-1"
            style={{ transform: layerOne }}
          >
            <div className="mountain" id="mountain-1" />
            <div className="mountain" id="mountain-2" />
            <div className="mountain" id="mountain-3" />
            <div className="mountain" id="mountain-4" />
            <div className="mountain" id="mountain-5" />
          </div>
          <div
            className="mountains-2"
            id="layer-2"
            style={{ transform: layerTwo }}
          >
            <div className="mountain" id="mountain-6" />
            <div className="mountain" id="mountain-7" />
            <div className="mountain" id="mountain-8" />
            <div className="mountain" id="mountain-9" />
            <div className="mountain" id="mountain-10" />
          </div>
        </div>
        <div className="light" />
        <div className="planets-wrapper" id="planets-wrapper">
          <div
            className="planets"
            id="layer-3"
            style={{ transform: layerThree }}
          >
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
        <ul className="stars" id="layer-4" style={{ transform: layerFour }}>
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
          <div className="rocket-route" id="secret_rocket_route">
            <div className="rocket" id="secret_rocket_homepage">
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
        <div
          className="text-wrapper"
          id="scene-text"
          style={{ transform: layerFifth }}
        >
          <span className="animated">
            I have no special talent. I am only passionately
          </span>
          <b className="color-primary">&nbsp;curious</b>
        </div>
        <span className="hide-text" id="hide_text_btn">
          Hide text
        </span>
      </div>
      <div className="secret-wrapper" id="rocket_secret_wrapper">
        <div className="secret">
          <div className="small-scene">
            <ul className="stars" id="secret_rocket_stars">
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
            <div className="rocket" id="secret_rocket">
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
            <span id="rocket_secret_wrapper_right_answer">I'm curious</span>
            <span id="rocket_secret_wrapper_false_answer">I'm smart</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home
