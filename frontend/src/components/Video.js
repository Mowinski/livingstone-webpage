import React from "react";
import intro from "../videos/gameplay.mp4";
import { StateContext } from "./App";
import SocialIcons from "./SocialIcons";

const Video = () => {
  const stateContext = React.useContext(StateContext);
  const facebookLink = stateContext.state.links.facebook;

  return (
    <section className="page-section clearfix">
      <div className="container" style={{position: "relative"}}>
        <div className="intro text-center">
          <video
            className="intro-img img-fluid mb-3 mb-lg-0 rounded intro-video"
            width="670"
            height="465"
            autoPlay
            muted
            loop
          >
            <source src={intro} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="intro-text left-0 text-center bg-faded p-5 rounded mx-auto">
            <p className="mb-3">
              Feel the African heat in this one of a kind riddles filled 3D
              adventure game.
            </p>
            <div className="intro-button mx-auto">
              <a
                className="btn btn-primary btn-xl full-round"
                href={facebookLink}
                target="_blank"
                rel="noopener"
                role="button"
                aria-label="Follow Us on Facebook"
              >
                Follow Us on Facebook!
              </a>
            </div>
          </div>
        </div>
        <div className="social-bar d-none d-lg-block">
          <SocialIcons/>
        </div>
      </div>
    </section>
  );
};

export default Video;
