import React, { useState } from "react"
import PropTypes from "prop-types"

const About = ({ obtainMedal }) => {
  const [selectedItem, setSelectedItem] = useState(1)

  const ScreenContentItem = ({ number, children }) => {
    return (
      <div
        className="screen-content__item"
        style={
          selectedItem && selectedItem === number
            ? { display: "flex" }
            : { display: "none" }
        }
      >
        {children}
      </div>
    )
  }

  const TabItem = ({ number }) => {
    return (
      <li
        className={selectedItem && selectedItem === number ? "selected" : ""}
        onClick={() => {
          setSelectedItem(number)
        }}
      >
        {number}
      </li>
    )
  }

  return (
    <section id="about-scene">
      <div className="screen-wrapper">
        <div className="screen">
          <div className="screen-content">
            <ScreenContentItem number={1}>
              <div className="screen-content__item__icon">
                <div className="css-round" />
              </div>
              <div className="screen-content__item__text">
                <h3>About me</h3>
                <p>
                  My name is Dorian I am a {new Date().getFullYear() - 1997}{" "}
                  year old web developer who mainly codes in Javascript, I like
                  to create funny things with CSS and I also do web design. I
                  always try to improve my skills and I have tons of new ideas
                  everyday in my head so I spend a lot of time creating new
                  projects
                </p>
              </div>
            </ScreenContentItem>
            <ScreenContentItem number={2}>
              <div className="screen-content__item__icon">
                <div className="css-controller">
                  <div className="body">
                    <div className="body-shadow" />
                    <div className="right-controls">
                      <div className="buttons" />
                      <div className="buttons" />
                    </div>
                    <div className="start-button" />
                    <div className="left-controls">
                      <div className="arrows" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="screen-content__item__text">
                <h3>Player</h3>
                <p>
                  I'm a big FPS player mainly CSGO and Overwatch but I spent a
                  few years playing RPGs like World of Warcraft. This is one of
                  the reasons why many of my projects are oriented towards the
                  world of video games. <br />
                  Console or PC? PC of course
                </p>
              </div>
            </ScreenContentItem>
            <ScreenContentItem number={3}>
              <div className="screen-content__item__icon">
                <div className="css-hat">
                  <div className="base" />
                  <div className="cone" />
                  <div className="leather" />
                </div>
              </div>
              <div className="screen-content__item__text">
                <h3>CSS Wizard</h3>
                <p>
                  I discovered CSS images through a @sashatran post and I
                  immediately loved making them, with my imagination overflowing
                  there was no shortage of ideas. Then I experimented a lot with
                  CSS and started to participate in CSS challenges (like Codepen
                  Challenges) in order to learn more and more.
                </p>
              </div>
            </ScreenContentItem>
            <ScreenContentItem number={4}>
              <div className="screen-content__item__icon">
                <div className="css-laptop">
                  <div className="screen" />
                  <div className="keyboard" />
                  <div className="slice" />
                </div>
              </div>
              <div className="screen-content__item__text">
                <h3>Developer</h3>
                <p>
                  I started developing out of curiosity when I was young,
                  wanting to know how to code a game. After that I set up my
                  first websites to gather the community of game servers that I
                  managed. I love coding in a quiet place with headphones on my
                  ears and loud music
                </p>
              </div>
            </ScreenContentItem>
            <ScreenContentItem number={5}>
              <div className="screen-content__item__icon">
                <div className="css-doge">
                  <div className="round" />
                  <div className="content">
                    <div className="left-ear" />
                    <div className="head" />
                    <div className="right-ear">
                      <div className="fur" />
                    </div>
                    <div className="fur-wrapper">
                      <div className="fur" />
                    </div>
                    <div className="mouth" />
                    <div className="nose" />
                    <div className="right-eye-fur" />
                    <div className="right-eye" />
                    <div className="left-eye-fur" />
                    <div className="left-eye" />
                  </div>
                  <span className="wow">wow</span>
                  <span className="css">much CSS</span>
                  <span className="flat">so Flat</span>
                </div>
              </div>
              <div className="screen-content__item__text">
                <h3>Memes Addict</h3>
                <p>
                  "You son of a bitch I'm in" - Morty Smity
                  <br />I spend so much time on the Internet that I discover new
                  memes every day. It's one of the best ways to express yourself
                  and to make fun of current news on the web.
                  <br />
                  Understanding memes without text is the final level
                </p>
              </div>
            </ScreenContentItem>
            <ScreenContentItem number={6}>
              <div className="screen-content__item__icon">
                <div className="css-helmet">
                  <div className="ears" />
                  <div className="base">
                    <div className="visor" />
                  </div>
                </div>
              </div>
              <div className="screen-content__item__text">
                <h3>Space Lover</h3>
                <p>
                  A human on a rock turning around another burning rock which
                  turns around another black rock all in a space vacuum
                  incompatible with man. Despite our ego it's amazing because we
                  are nothing in this universe <br />
                  Going into space is a fucking dream but actualy to complicated
                </p>
              </div>
            </ScreenContentItem>
          </div>
          <ul className="tabs-bar">
            <TabItem number={1} />
            <TabItem number={2} />
            <TabItem number={3} />
            <TabItem number={4} />
            <TabItem number={5} />
            <TabItem number={6} />
          </ul>
          <div className="screen-light" />
        </div>
        <div className="controls">
          <div className="little-screen-text">
            <span>ERROR</span>
            <span>Unknown item detected</span>
            <span>31x19970a5</span>
            <div className="little-screen-light" />
          </div>
          <div className="little-screen">
            <div className="ring" />
            <div className="text-line" />
            <div className="pointer-line" />
            <div className="spheric" />
            <div className="little-screen-light" />
          </div>
        </div>
      </div>
      <div className="window">
        <div className="position-controller x">
          <div
            className={`el-controller y floating-element ${
              selectedItem && selectedItem === 2 ? "selected" : ""
            }`}
            onClick={() => {
              setSelectedItem(2)
            }}
          >
            <div className="css-controller">
              <div className="body">
                <div className="body-shadow" />
                <div className="right-controls">
                  <div className="buttons" />
                  <div className="buttons" />
                </div>
                <div className="start-button" />
                <div className="left-controls">
                  <div className="arrows" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="position-helmet x2">
          <div
            className={`el-helmet y floating-element ${
              selectedItem && selectedItem === 6 ? "selected" : ""
            }`}
            onClick={() => {
              setSelectedItem(6)
            }}
          >
            <div className="css-helmet">
              <div className="ears" />
              <div className="base">
                <div className="visor" />
              </div>
            </div>
          </div>
        </div>
        <div className="position-hat x">
          <div
            className={`el-hat y floating-element ${
              selectedItem && selectedItem === 3 ? "selected" : ""
            }`}
            onClick={() => {
              setSelectedItem(3)
            }}
          >
            <div className="css-hat">
              <div className="base" />
              <div className="cone" />
              <div className="leather" />
            </div>
          </div>
        </div>
        <div className="position-laptop x2">
          <div
            className={`el-laptop y floating-element ${
              selectedItem && selectedItem === 4 ? "selected" : ""
            }`}
            onClick={() => {
              setSelectedItem(4)
            }}
          >
            <div className="css-laptop">
              <div className="screen" />
              <div className="keyboard" />
              <div className="slice" />
            </div>
          </div>
        </div>
        <div className="position-doge x">
          <div
            className={`el-doge y floating-element ${
              selectedItem && selectedItem === 5 ? "selected" : ""
            }`}
            onClick={() => {
              setSelectedItem(5)
            }}
          >
            <div className="css-doge">
              <div className="round" />
              <div className="content">
                <div className="left-ear" />
                <div className="head" />
                <div className="right-ear">
                  <div className="fur" />
                </div>
                <div className="fur-wrapper">
                  <div className="fur" />
                </div>
                <div className="mouth" />
                <div className="nose" />
                <div className="right-eye-fur" />
                <div className="right-eye" />
                <div className="left-eye-fur" />
                <div className="left-eye" />
              </div>
              <span className="wow">wow</span>
              <span className="css">much CSS</span>
              <span className="flat">so Flat</span>
            </div>
          </div>
        </div>
        <div className="position-hidden x2">
          <div
            className={`el-hidden y floating-element ${
              selectedItem && selectedItem === 1 ? "selected" : ""
            }`}
            onClick={() => {
              obtainMedal()
              setSelectedItem(1)
            }}
          ></div>
        </div>
      </div>
    </section>
  )
}

About.propTypes = {
  obtainMedal: PropTypes.func,
}

export default About
