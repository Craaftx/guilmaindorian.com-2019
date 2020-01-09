import React, { useRef, useEffect, useCallback, useState } from "react"
import PropTypes from "prop-types"

const distancePerIteration = 4

let keysPressed = {
  90: null,
  87: null,
  83: null,
  81: null,
  65: null,
  68: null,
}

const Projects = ({ obtainMedal }) => {
  let maxWidthValue = 1200 - 100
  let maxHeightValue = 600 - 100
  let initialRocketLeft = `${maxWidthValue / 2}px`

  useEffect(() => {
    maxWidthValue = window.innerWidth - 100
    maxHeightValue = window.innerHeight - 100
    initialRocketLeft = `${maxWidthValue / 2}px`
  }, [])

  const [keyboard, setKeyboard] = useState({
    layout: "Azerty",
    keyTop: { label: "Z", value: 90 },
    keyBottom: { label: "S", value: 83 },
    keyLeft: { label: "Q", value: 81 },
    keyRight: { label: "D", value: 68 },
  })

  const switchKeyboard = layout => {
    if (layout === "Qwerty") {
      setKeyboard({
        layout: "Qwerty",
        keyTop: { label: "W", value: 87 },
        keyBottom: { label: "S", value: 83 },
        keyLeft: { label: "A", value: 65 },
        keyRight: { label: "D", value: 68 },
      })
      keyTop.current.innerHTML = keyboard.keyTop.label
      keyBottom.current.innerHTML = keyboard.keyBottom.label
      keyLeft.current.innerHTML = keyboard.keyLeft.label
      keyRight.current.innerHTML = keyboard.keyRight.label
    } else {
      setKeyboard({
        layout: "Azerty",
        keyTop: { label: "Z", value: 90 },
        keyBottom: { label: "S", value: 83 },
        keyLeft: { label: "Q", value: 81 },
        keyRight: { label: "D", value: 68 },
      })
      keyTop.current.innerHTML = keyboard.keyTop.label
      keyBottom.current.innerHTML = keyboard.keyBottom.label
      keyLeft.current.innerHTML = keyboard.keyLeft.label
      keyRight.current.innerHTML = keyboard.keyRight.label
    }
  }

  const scene = useRef()
  const stars = useRef()
  const spaceLight = useRef()
  const universe1 = useRef()
  const universe2 = useRef()
  const universe3 = useRef()

  const rocket = useRef()
  const rocketWrapper = useRef()
  const rocketFlame = useRef()

  const controls = useRef()
  const tips = useRef()

  const keyTop = useRef()
  const keyBottom = useRef()
  const keyLeft = useRef()
  const keyRight = useRef()

  let actualUniverse = 0
  const maxUniverse = 2

  const universes = [universe1, universe2, universe3]

  const transition = (from, to, speed) => {
    const universeFrom = universes[from].current
    const universeTo = universes[to].current
    if (speed === "fast-forward") {
      rocket.current.classList.add("fast-push")
      setTimeout(function() {
        rocket.current.classList.remove("fast-push")
      }, 4000)
    } else {
      rocket.current.classList.add("push")
      setTimeout(function() {
        rocket.current.classList.remove("push")
      }, 4000)
    }
    setTimeout(function() {
      universeFrom.style.opacity = "0"
      controls.current.style.opacity = "0"
      spaceLight.current.style.opacity = "0"
    }, 1000)
    setTimeout(function() {
      universeFrom.style.display = "none"
      universeFrom.style.opacity = "0"
      universeTo.style.display = "block"
      universeTo.style.opacity = "0"
      rocket.current.style.left = initialRocketLeft
    }, 2000)
    setTimeout(function() {
      universeTo.style.opacity = "1"
      controls.current.style.opacity = "1"
      spaceLight.current.style.opacity = "0.6"
    }, 3500)
  }

  const changeUniverse = speed => {
    const oldUniverse = actualUniverse
    if (actualUniverse === maxUniverse) {
      actualUniverse = 0
      transition(oldUniverse, actualUniverse, speed)
    } else {
      if (speed === "fast-forward") {
        actualUniverse = maxUniverse
        transition(oldUniverse, actualUniverse, speed)
      } else {
        actualUniverse = actualUniverse + 1
        transition(oldUniverse, actualUniverse, speed)
      }
    }
  }

  const keyDownEventHandler = event => {
    keysPressed[event.which] = true
    switch (event.which) {
      case keyboard.keyTop.value:
        rocket.current.style.transform = "scale(0.4) rotate(0deg)"
        rocketFlame.current.style.animation =
          "pulse_reactor 0.5s ease-in-out alternate infinite"
        rocketFlame.current.style.opacity = "1"
        keyTop.current.style.color = "#FF9800"
        break
      case keyboard.keyBottom.value:
        rocket.current.style.transform = "scale(0.4) rotate(180deg)"
        rocketFlame.current.style.animation =
          "pulse_reactor 0.5s ease-in-out alternate infinite"
        rocketFlame.current.style.opacity = "1"
        keyBottom.current.style.color = "#FF9800"
        break
      case keyboard.keyRight.value:
        rocket.current.style.transform = "scale(0.4) rotate(90deg)"
        rocketFlame.current.style.animation =
          "pulse_reactor 0.5s ease-in-out alternate infinite"
        rocketFlame.current.style.opacity = "1"
        keyRight.current.style.color = "#FF9800"
        break
      case keyboard.keyLeft.value:
        rocket.current.style.transform = "scale(0.4) rotate(270deg)"
        rocketFlame.current.style.animation =
          "pulse_reactor 0.5s ease-in-out alternate infinite"
        rocketFlame.current.style.opacity = "1"
        keyLeft.current.style.color = "#FF9800"
        break
      default:
        return
    }
  }

  const keyUpEventHandler = event => {
    keysPressed[event.which] = false
    switch (event.which) {
      case keyboard.keyTop.value:
        keyTop.current.style.color = "#eeeeee"
        rocketFlame.current.style.animation = "none"
        rocketFlame.current.style.opacity = "0"
        break
      case keyboard.keyBottom.value:
        keyBottom.current.style.color = "#eeeeee"
        rocketFlame.current.style.animation = "none"
        rocketFlame.current.style.opacity = "0"
        break
      case keyboard.keyRight.value:
        keyRight.current.style.color = "#eeeeee"
        rocketFlame.current.style.animation = "none"
        rocketFlame.current.style.opacity = "0"
        break
      case keyboard.keyLeft.value:
        keyLeft.current.style.color = "#eeeeee"
        rocketFlame.current.style.animation = "none"
        rocketFlame.current.style.opacity = "0"
        break
      default:
        return
    }
  }

  useEffect(() => {
    window.addEventListener("keydown", e => {
      keyDownEventHandler(e)
    })

    window.addEventListener("keyup", e => {
      keyUpEventHandler(e)
    })
  }, [keyboard])

  const calculateNewValue = useCallback(
    (oldValue, axis) => {
      const keyCode1 =
        axis === "X" ? keyboard.keyLeft.value : keyboard.keyTop.value
      const keyCode2 =
        axis === "X" ? keyboard.keyRight.value : keyboard.keyBottom.value
      const maxValue = axis === "Y" ? maxHeightValue : maxWidthValue
      const newValue =
        parseInt(oldValue, 10) -
        (keysPressed[keyCode1] ? distancePerIteration : 0) +
        (keysPressed[keyCode2] ? distancePerIteration : 0)
      return newValue < 0 ? 0 : newValue > maxValue ? maxValue : newValue
    },
    [keyboard]
  )

  useEffect(() => {
    let ref
    rocket.current.style.left = `${maxWidthValue / 2}px`
    rocket.current.style.top = `${maxHeightValue / 2}px`
    const step = () => {
      rocket.current.style.left = `${calculateNewValue(
        rocket.current.style.left,
        "X"
      )}px`
      rocket.current.style.top = `${calculateNewValue(
        rocket.current.style.top,
        "Y"
      )}px`
      ref = requestAnimationFrame(step)
    }
    ref = requestAnimationFrame(step)
    return () => {
      cancelAnimationFrame(ref)
    }
  }, [calculateNewValue])

  return (
    <section className="projects" ref={scene}>
      <div className="scene-project d-none d-lg-block">
        <div className="light" ref={spaceLight} />
        <ul className="stars" ref={stars}>
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
        <div className="rocket-wrapper" ref={rocketWrapper}>
          <div className="rocket" ref={rocket}>
            <div className="reactor" />
            <div className="wing wing-1" />
            <div className="wing wing-2" />
            <div className="body" />
            <div className="glass" />
            <div className="flame" ref={rocketFlame} />
            <div className="reactor-2" />
            <div className="flame-push" />
          </div>
        </div>
        <div
          className="project-planets-wrapper"
          ref={universe1}
          style={{
            opacity: 1,
            display: "block",
          }}
        >
          <h3 className="system-info">U.001</h3>
          <div className="planet-1 planet-info">
            <div className="info">
              <div className="info-details left">
                <h2>Niardo G457895</h2>
                <small>
                  This planet is very toxic in this season <br />
                  we advise you not to approach
                </small>
              </div>
            </div>
            <div className="shadow" />
            <div className="body" />
          </div>
          <div className="planet-2 planet-info">
            <div className="info">
              <div className="info-details right">
                <span>Recommended</span>
                <h2>Codepen Creations</h2>
                <a
                  href="https://craaftx.github.io/codepenProjects/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Landing
                </a>
              </div>
            </div>
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
          <div className="planet-3 planet-info">
            <div className="info">
              <div className="info-details left">
                <h2>100 Days Css</h2>
                <small>100 Days 100 CSS creations, currently in progress</small>
                <a
                  href="https://craaftx.github.io/100dayscss/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Landing
                </a>
              </div>
            </div>
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
        <div className="project-planets-wrapper" ref={universe2}>
          <h3 className="system-info">U.002</h3>
          <ul className="asteroids-ring">
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
          <div className="planet-5 planet-info">
            <div className="info">
              <div className="info-details left">
                <h2>
                  POC <b>Unilan</b>
                </h2>
                <small>
                  This project was created for an event on video games <br />
                  but the site had to be coded in two days only.
                </small>
                <a
                  href="https://craaftx.github.io/UniLan/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Landing
                </a>
              </div>
            </div>
            <div className="shadow" />
            <div className="body" />
            <ul className="lines">
              <li />
              <li />
              <li />
              <li />
              <li />
            </ul>
          </div>
          <div className="planet-6 planet-info">
            <div className="info">
              <div className="info-details left">
                <h2>Old Portfolio</h2>
                <small>
                  If you don't like space i'm so sorry, because I love that
                </small>
                <a
                  href="https://craaftx.github.io/portfolio/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Landing
                </a>
              </div>
            </div>
            <div className="body" />
            <ul className="asteroid">
              <li />
              <li />
              <li />
              <li />
              <li />
              <li />
              <li />
              <li />
            </ul>
          </div>
        </div>
        <div className="project-planets-wrapper" ref={universe3}>
          <h3 className="system-info">U.003</h3>
          <div className="planet-7 planet-info">
            <div className="info">
              <div className="info-details right">
                <h2>The King's Bell</h2>
                <small>Graphic project for a game named Overwatch</small>
                <a href="https://craaftx.github.io/portfolio/assets/image/betadesign/TheKingsBellBetaDesign.png">
                  Landing
                </a>
              </div>
            </div>
            <div className="body" />
            <div className="ring" />
            <div className="ring-mask" />
          </div>
          <div className="planet-8 planet-info">
            <div className="info">
              <div className="info-details left">
                <h2>Terah P57K815</h2>
                <small>It's look like earth but it's not earth</small>
              </div>
            </div>
            <div className="body" />
            <div className="satellite">
              <div
                className="planet"
                onClick={() => {
                  obtainMedal()
                }}
              >
                <span>ᛯ</span>
              </div>
            </div>
            <ul className="ground">
              <li />
              <li />
              <li />
              <li />
              <li />
            </ul>
          </div>
          <div className="planet-9 planet-info">
            <div className="info">
              <div className="info-details left">
                <h2>Milia Gun</h2>
                <small>
                  Favorite planet of the players it is as welcoming
                  <br />
                  as dangerous in this rainy season
                </small>
              </div>
            </div>
            <div className="shadow" />
            <div className="body" />
            <ul className="lines">
              <li />
              <li />
              <li />
              <li />
              <li />
            </ul>
          </div>
        </div>
        <div className="universe_controls" ref={controls}>
          <h1>projects</h1>
          <div
            className="forward"
            onClick={() => {
              changeUniverse("forward")
            }}
          >
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="angle-right"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 256 512"
            >
              <path
                fill="currentColor"
                d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"
              />
            </svg>
            Forward
          </div>
          <div
            className="forward"
            onClick={() => {
              changeUniverse("fast-forward")
            }}
          >
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="angle-double-right"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path
                fill="currentColor"
                d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34zm192-34l-136-136c-9.4-9.4-24.6-9.4-33.9 0l-22.6 22.6c-9.4 9.4-9.4 24.6 0 33.9l96.4 96.4-96.4 96.4c-9.4 9.4-9.4 24.6 0 33.9l22.6 22.6c9.4 9.4 24.6 9.4 33.9 0l136-136c9.4-9.2 9.4-24.4 0-33.8z"
              />
            </svg>
            Fast Forward
          </div>
        </div>
        <div className="tips" ref={tips}>
          <div className="keys">
            <span ref={keyTop} className="key-top">
              {keyboard.keyTop.label}
            </span>
            <span ref={keyBottom} className="key-bottom">
              {keyboard.keyBottom.label}
            </span>
            <span ref={keyLeft} className="key-left">
              {keyboard.keyLeft.label}
            </span>
            <span ref={keyRight} className="key-right">
              {keyboard.keyRight.label}
            </span>
          </div>
          <div className="keyboard">
            <h6>Use the keyboard to control the spaceship</h6>
            <span
              onClick={() => {
                switchKeyboard("Qwerty")
              }}
            >
              Qwerty ?
            </span>
            <span
              onClick={() => {
                switchKeyboard("Azerty")
              }}
            >
              Azerty ?
            </span>
          </div>
        </div>
      </div>
      <div className="list-project d-lg-none">
        <div className="row row-no-padding item-project">
          <div className="col-5 col-sm-6 item-planet">
            <div className="planet-2 project-planet">
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
          <div className="col-7 col-sm-6 item-info">
            <div className="content">
              <span>Recommended</span>
              <h2>Codepen Creations</h2>
              <a
                href="https://craaftx.github.io/codepenProjects/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit
              </a>
            </div>
          </div>
        </div>
        <div className="row row-no-padding item-project right">
          <div className="col-5 col-sm-6 item-planet">
            <div className="planet-3 project-planet">
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
          <div className="col-7 col-sm-6 item-info">
            <div className="content">
              <h2>100 Days Css</h2>
              <small>100 Days 100 CSS creations, currently in progress</small>
              <a
                href="https://craaftx.github.io/100dayscss/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit
              </a>
            </div>
          </div>
        </div>
        <div className="row row-no-padding item-project">
          <div className="col-5 col-sm-6 item-planet">
            <div className="planet-5 project-planet">
              <div className="shadow" />
              <div className="body" />
              <ul className="lines">
                <li />
                <li />
                <li />
                <li />
                <li />
              </ul>
            </div>
          </div>
          <div className="col-7 col-sm-6 item-info">
            <div className="content">
              <h2>
                POC <b>Unilan</b>
              </h2>
              <small>
                This project was created for an event on video games <br />
                but the site had to be coded in two days only.
              </small>
              <a
                href="https://craaftx.github.io/UniLan/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit
              </a>
            </div>
          </div>
        </div>
        <div className="row row-no-padding item-project right">
          <div className="col-5 col-sm-6 item-planet">
            <div className="planet-6 project-planet">
              <div className="body" />
              <ul className="asteroid">
                <li />
                <li />
                <li />
                <li />
                <li />
                <li />
                <li />
                <li />
              </ul>
            </div>
          </div>
          <div className="col-7 col-sm-6 item-info">
            <div className="content">
              <h2>Old Portfolio</h2>
              <small>
                If you don't like space i'm so sorry, because I love that
              </small>
              <a
                href="https://craaftx.github.io/portfolio/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit
              </a>
            </div>
          </div>
        </div>
        <div className="row row-no-padding item-project">
          <div className="col-5 col-sm-6 item-planet">
            <div className="planet-7 project-planet">
              <div className="body" />
              <div className="ring" />
              <div className="ring-mask" />
            </div>
          </div>
          <div className="col-7 col-sm-6 item-info">
            <div className="content">
              <h2>The King's Bell</h2>
              <small>Graphic project for a game named Overwatch</small>
              <a href="https://craaftx.github.io/portfolio/assets/image/betadesign/TheKingsBellBetaDesign.png">
                Visit
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

Projects.propTypes = {
  obtainMedal: PropTypes.func,
}

export default Projects
