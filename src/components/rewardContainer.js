import React from "react"

const RewardContainer = () => {
  const twitterShareUrl =
    "https://twitter.com/intent/tweet?text=Hey%2C%20I%20beat%20you%20%40Craaftx1%20!!!%20%0A%0AI%20just%20found%20all%20the%20secrets%20you%27ve%20hidden%20on%20www.guilmaindorian.com%20%F0%9F%98%8E%0Apic.twitter.com%2FQh9D0Q2lO5"

  return (
    <section id="reward-wrapper">
      <div className="row justify-content-center">
        <div className="col-lg-8 col-md-12 text-wrapper">
          <h1 className="color-primary">Here you are !</h1>
          <h4>Congratulations you are very curious</h4>
          <p>
            You have discovered all the clues, thanks for playing with my code!
            I do not have a thousand ways to thank you, so I created a little
            gift just for you to thank you for your participation!
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
          <div id="gift-wrapper">
            <div className="skins-wrapper">
              <h4>Astronaut Skins</h4>
              <span id="a_skin_vanilla">Vanilla</span>
              <span id="a_skin_explorer">Explorer</span>
              <span id="a_skin_golden">Golden</span>
              <span id="a_skin_night">Night</span>
              <span id="a_skin_runic">Runic</span>
              <span id="a_skin_invisible_skin">Invisible</span>
              <hr />
              <h4>Rocket Skins</h4>
              <span id="r_skin_vanilla">Vanilla</span>
              <span id="r_skin_explorer">Explorer</span>
              <span id="r_skin_golden">Golden</span>
              <span id="r_skin_night">Night</span>
              <span id="r_skin_runic">Runic</span>
              <span id="r_skin_greyscale">Greyscale</span>
            </div>
            <div className="gift" id="gift-button">
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

export default RewardContainer;
