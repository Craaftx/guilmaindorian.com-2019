import React, { useState, useRef, useEffect } from "react"
import PropTypes from "prop-types"

let pageY

const Contact = ({ obtainMedal }) => {
  let windowInnerHeight = "600"
  const characterArm = useRef()
  const characterLamp = useRef()
  const characterHead = useRef()
  const [enigmaMemory, setEnigmaMemory] = useState({
    symbol1: null,
    symbol2: null,
    symbol3: null,
    symbol4: null,
    symbol5: null,
    symbol6: null,
    symbol7: null,
    symbol8: null,
    symbol9: null,
  })

  const lampMovement = e => {
    pageY = e.clientY - windowInnerHeight / 2
  }

  useEffect(() => {
    windowInnerHeight = window.innerHeight
    let ref
    const step = () => {
      characterArm.current.style.transform = `rotate(${-60 + pageY / 10}deg)`
      characterLamp.current.style.transform = `rotate(${-60 + pageY / 10}deg)`
      characterHead.current.style.transform = `translateX(-54%) rotate(${-30 +
        pageY / 10}deg)`
      ref = requestAnimationFrame(step)
    }
    ref = requestAnimationFrame(step)
    return () => {
      cancelAnimationFrame(ref)
    }
  }, [])

  useEffect(() => {
    const memory = enigmaMemory
    if (
      memory.symbol4 &&
      memory.symbol6 &&
      memory.symbol8 &&
      !memory.symbol1 &&
      !memory.symbol2 &&
      !memory.symbol5 &&
      !memory.symbol7 &&
      !memory.symbol9
    ) {
      obtainMedal()
    }
  }, [enigmaMemory, obtainMedal])

  return (
    <section
      className="contact"
      onMouseMove={e => {
        lampMovement(e)
      }}
    >
      <div className="d-none d-xl-block lamp_scene">
        <div className="character">
          <div className="head" ref={characterHead} />
          <div className="body" />
          <div
            className="arm"
            id="lamp_arm"
            ref={characterLamp}
            style={{ transform: "rotate(-45deg)" }}
          >
            <div className="forearm">
              <div className="lamp">
                <div className="light" />
                <div className="mask-top" />
                <div className="mask-bottom" />
              </div>
            </div>
          </div>
          <div
            className="arm"
            id="arm"
            ref={characterArm}
            style={{ transform: "rotate(-45deg)" }}
          >
            <div className="forearm">
              <div className="lamp" />
            </div>
          </div>
          <div className="backpack" />
          <div className="legs" />
        </div>
        <div className="no-character">
          <ul className="cave">
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
          <div className="monster">
            <div className="second" />
            <div className="hand hand-1" />
            <div className="hand hand-2" />
            <div className="body">
              <div className="legs" />
            </div>
            <div className="ears" />
            <div className="head">
              <div className="eye" />
              <ul className="teeth">
                <li />
                <li />
                <li />
                <li />
                <li />
                <li />
                <li />
              </ul>
            </div>
            <div className="markup">ᚬ</div>
          </div>
          <div className="monster-2">
            <div className="spaceship">
              <div className="antenna-wrapper">
                <div className="antenna" />
              </div>
              <div className="top" />
              <div className="bottom" />
              <div className="light" />
            </div>
            <div className="head">
              <div className="skin">
                <div className="markup">ᚦ</div>
                <div className="eye" />
                <div className="eye eye-2" />
              </div>
            </div>
          </div>
          <div className="monster-3">
            <div className="hand hand-1" />
            <div className="hand hand-2" />
            <div className="body" />
            <div className="head">
              <div className="eye">
                <div className="pupil" />
              </div>
              <div className="mouth" />
            </div>
            <div className="markup">ᚸ</div>
          </div>
        </div>
      </div>
      <div className="text-wrapper">
        <h1 className="title-underline">Contact</h1>
        <p>
          Whether you want to know more about me, tell me about a professional
          project or ask me specific questions, do not hesitate to contact me
          via my social networks.
        </p>
        <ul className="social">
          <li>
            <a
              href="https://www.linkedin.com/in/dorian-guilmain/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fab"
                data-icon="linkedin"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path
                  fill="currentColor"
                  d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"
                />
              </svg>
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/Craaftx1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fab"
                data-icon="twitter"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
                />
              </svg>
            </a>
          </li>
          <li>
            <a
              href="https://codepen.io/Craaftx/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fab"
                data-icon="codepen"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M502.285 159.704l-234-156c-7.987-4.915-16.511-4.96-24.571 0l-234 156C3.714 163.703 0 170.847 0 177.989v155.999c0 7.143 3.714 14.286 9.715 18.286l234 156.022c7.987 4.915 16.511 4.96 24.571 0l234-156.022c6-3.999 9.715-11.143 9.715-18.286V177.989c-.001-7.142-3.715-14.286-9.716-18.285zM278 63.131l172.286 114.858-76.857 51.429L278 165.703V63.131zm-44 0v102.572l-95.429 63.715-76.857-51.429L234 63.131zM44 219.132l55.143 36.857L44 292.846v-73.714zm190 229.715L61.714 333.989l76.857-51.429L234 346.275v102.572zm22-140.858l-77.715-52 77.715-52 77.715 52-77.715 52zm22 140.858V346.275l95.429-63.715 76.857 51.429L278 448.847zm190-156.001l-55.143-36.857L468 219.132v73.714z"
                />
              </svg>
            </a>
          </li>
          <li>
            <a
              href="https://github.com/Craaftx"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fab"
                data-icon="github"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 496 512"
              >
                <path
                  fill="currentColor"
                  d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
                />
              </svg>
            </a>
          </li>
        </ul>
        <p>
          Thank you for taking your time to explore my website and I hope you
          enjoyed the small scenes created{" "}
          <b className="color-orange">without images or svg but with a LOT of CSS</b> of course you can
          check the code with your inspector :D
        </p>
        <ul className="enigma d-none d-xl-block">
          <li
            style={{ color: enigmaMemory.symbol1 ? "#ff9800" : "currentColor" }}
            onClick={() => {
              setEnigmaMemory(prevState => ({
                ...prevState,
                symbol1: prevState.symbol1 ? null : "set",
              }))
            }}
          >
            ᚠ
          </li>
          <li
            style={{ color: enigmaMemory.symbol2 ? "#ff9800" : "currentColor" }}
            onClick={() => {
              setEnigmaMemory(prevState => ({
                ...prevState,
                symbol2: prevState.symbol2 ? null : "set",
              }))
            }}
          >
            ᚢ
          </li>
          <li
            style={{ color: enigmaMemory.symbol3 ? "#ff9800" : "currentColor" }}
            onClick={() => {
              setEnigmaMemory(prevState => ({
                ...prevState,
                symbol3: prevState.symbol3 ? null : "set",
              }))
            }}
          >
            ᚣ
          </li>
          <li
            style={{ color: enigmaMemory.symbol4 ? "#ff9800" : "currentColor" }}
            onClick={() => {
              setEnigmaMemory(prevState => ({
                ...prevState,
                symbol4: prevState.symbol4 ? null : "set",
              }))
            }}
          >
            ᚦ
          </li>
          <li
            style={{ color: enigmaMemory.symbol5 ? "#ff9800" : "currentColor" }}
            onClick={() => {
              setEnigmaMemory(prevState => ({
                ...prevState,
                symbol5: prevState.symbol5 ? null : "set",
              }))
            }}
          >
            ᚥ
          </li>
          <li
            style={{ color: enigmaMemory.symbol6 ? "#ff9800" : "currentColor" }}
            onClick={() => {
              setEnigmaMemory(prevState => ({
                ...prevState,
                symbol6: prevState.symbol6 ? null : "set",
              }))
            }}
          >
            ᚬ
          </li>
          <li
            style={{ color: enigmaMemory.symbol7 ? "#ff9800" : "currentColor" }}
            onClick={() => {
              setEnigmaMemory(prevState => ({
                ...prevState,
                symbol7: prevState.symbol7 ? null : "set",
              }))
            }}
          >
            ᚳ
          </li>
          <li
            style={{ color: enigmaMemory.symbol8 ? "#ff9800" : "currentColor" }}
            onClick={() => {
              setEnigmaMemory(prevState => ({
                ...prevState,
                symbol8: prevState.symbol8 ? null : "set",
              }))
            }}
          >
            ᚸ
          </li>
          <li
            style={{ color: enigmaMemory.symbol9 ? "#ff9800" : "currentColor" }}
            onClick={() => {
              setEnigmaMemory(prevState => ({
                ...prevState,
                symbol9: prevState.symbol9 ? null : "set",
              }))
            }}
          >
            ᚢ
          </li>
        </ul>
        <h5 className="d-lg-none">
          <i>
            Do not hesitate to visit this website on the desktop to see more CSS
            creations and more functionality
          </i>
        </h5>
      </div>
    </section>
  )
}

Contact.propTypes = {
  obtainMedal: PropTypes.func,
}

export default Contact
