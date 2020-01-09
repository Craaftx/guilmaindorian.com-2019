import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"

const RewardContainer = ({ changeSkins }) => {
  const [opened, setOpened] = useState()
  const [astronautSkin, setAstronautSkin] = useState()
  const [rocketSkin, setRocketSkin] = useState()

  useEffect(() => {
    changeSkins(astronautSkin, rocketSkin)
  }, [astronautSkin, rocketSkin, changeSkins])

  const twitterShareUrl =
    "https://twitter.com/intent/tweet?text=Hey%2C%20I%20beat%20you%20%40Craaftx1%20!!!%20%0A%0AI%20just%20found%20all%20the%20secrets%20you%27ve%20hidden%20on%20www.guilmaindorian.com%20%F0%9F%98%8E%0Apic.twitter.com%2FQh9D0Q2lO5"

  return (
    <section className="reward-wrapper">
      <div className="row justify-content-center">
        <div className="col-lg-8 col-md-12 text-wrapper">
          <h1 className="color-primary">You did it !</h1>
          <b>Congratulations you are very curious</b>
          <p>
            You have discovered all the secrets, thank you for playing with my
            code! I don't have a thousand ways to thank you, so I created a
            small gift just for you. Thanks again
          </p>
          <a
            href={twitterShareUrl}
            className="twitter-share-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            Share my results
          </a>
          <div className="round-wrapper">
            <div className="round" />
          </div>
          <div
            className={opened ? "gift-wrapper opened" : "gift-wrapper"}
            onClick={() => {
              setOpened(true)
            }}
          >
            <div className="skins-wrapper">
              <h4>Astronaut Skins</h4>
              <span
                className="a_skin_vanilla"
                onClick={() => {
                  setAstronautSkin("skin_vanilla")
                }}
              >
                Vanilla
              </span>
              <span
                className="a_skin_explorer"
                onClick={() => {
                  setAstronautSkin("skin_explorer")
                }}
              >
                Explorer
              </span>
              <span
                className="a_skin_golden"
                onClick={() => {
                  setAstronautSkin("skin_golden")
                }}
              >
                Golden
              </span>
              <span
                className="a_skin_night"
                onClick={() => {
                  setAstronautSkin("skin_night")
                }}
              >
                Night
              </span>
              <span
                className="a_skin_runic"
                onClick={() => {
                  setAstronautSkin("skin_runic")
                }}
              >
                Runic
              </span>
              <span
                className="a_skin_invisible"
                onClick={() => {
                  setAstronautSkin("skin_invisible")
                }}
              >
                Invisible
              </span>

              <h4>Rocket Skins</h4>
              <span
                className="r_skin_vanilla"
                onClick={() => {
                  setRocketSkin("skin_vanilla")
                }}
              >
                Vanilla
              </span>
              <span
                className="r_skin_explorer"
                onClick={() => {
                  setRocketSkin("skin_explorer")
                }}
              >
                Explorer
              </span>
              <span
                className="r_skin_golden"
                onClick={() => {
                  setRocketSkin("skin_golden")
                }}
              >
                Golden
              </span>
              <span
                className="r_skin_night"
                onClick={() => {
                  setRocketSkin("skin_night")
                }}
              >
                Night
              </span>
              <span
                className="r_skin_runic"
                onClick={() => {
                  setRocketSkin("skin_runic")
                }}
              >
                Runic
              </span>
              <span
                className="r_skin_greyscale"
                onClick={() => {
                  setRocketSkin("skin_greyscale")
                }}
              >
                Greyscale
              </span>
            </div>
            <div className="gift">
              <div className="background" />
              <div className="bottom" />
              <div className="top">
                <div className="ruban" />
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-2 col-sm-2">
          <div className="reward_scene">
            <div className="rocket">
              <div className="reactor" />
              <div className="wing wing-1" />
              <div className="wing wing-2" />
              <div className="body" />
              <div className="glass" />
              <div className="flame" />
              <div className="reactor-2" />
            </div>
            <div className="character">
              <div className="head" />
              <div className="body" />
              <div className="arm">
                <div className="forearm" />
              </div>
              <div className="backpack" />
              <div className="legs" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

RewardContainer.propTypes = {
  changeSkins: PropTypes.func,
}

export default RewardContainer
