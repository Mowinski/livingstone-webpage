import React from "react";
import ReactSafeHtml from "react-safe-html";

import about from "../images/about.jpg";
import {StateContext} from "./App";
import Weapons from "./Weapons";



const About = () => {
    const stateContext = React.useContext(StateContext);
    return (
        <>
            <section className="page-section about-heading">
                <div className="container">
                    <img className="img-fluid rounded about-heading-img mb-3 mb-lg-0" src={stateContext.state.about_image} alt=""/>
                    <div className="about-heading-content">
                        <div className="row">
                            <div className="col-xl-9 col-lg-10 mx-auto">
                                <div className="bg-faded rounded p-5">
                                    <ReactSafeHtml html={stateContext.state.about_text}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Weapons/>
        </>
    );
};

export default About