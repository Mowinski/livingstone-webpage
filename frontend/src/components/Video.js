import React from "react";
import intro from '../videos/gameplay.mp4';


const Video = () => (
    <section className="page-section clearfix">
        <div className="container">
            <div className="intro">
                <video className="intro-img img-fluid mb-3 mb-lg-0 rounded intro-video" width="670" height="465" autoPlay muted loop>
                  <source src={intro} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className="intro-text left-0 text-center bg-faded p-5 rounded">
                    <p className="mb-3">
                        Feel the African heat in this one of a kind riddles filled 3D adventure game.
                    </p>
                    <div className="intro-button mx-auto">
                        <a className="btn btn-primary btn-xl" href="#">Follow Us on Facebook!</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default Video;