import React from "react"

const Home = () => {
  return (
    <section className="scene" id="scene-wrapper">
      <div className="noise" />
      <div className="scene-content">
        <div className="mountains-wrapper" id="mountains-wrapper">
          <div className="mountains" id="layer-1">
            <div className="mountain" id="mountain-1" />
            <div className="mountain" id="mountain-2" />
            <div className="mountain" id="mountain-3" />
            <div className="mountain" id="mountain-4" />
            <div className="mountain" id="mountain-5" />
          </div>
          <div className="mountains-2" id="layer-2">
            <div className="mountain" id="mountain-6" />
            <div className="mountain" id="mountain-7" />
            <div className="mountain" id="mountain-8" />
            <div className="mountain" id="mountain-9" />
            <div className="mountain" id="mountain-10" />
          </div>
        </div>
        <div className="light" />
        <div className="planets-wrapper" id="planets-wrapper">
          <div className="planets" id="layer-3">
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
        <ul className="stars" id="layer-4">
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
        <div className="rocket-wrapper d-none d-xl-block" id="layer-5">
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
        <div className="text-wrapper" id="scene-text">
          <span className="animated">
            I have no special talent. I am only passionately
          </span>
          <b className="color-primary">curious</b>
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
