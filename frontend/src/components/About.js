import React from "react";
import ReactSafeHtml from "react-safe-html";

import about from "../images/about.jpg";
import {StateContext} from "./App";



const About = () => {
    const stateContext = React.useContext(StateContext);

    return (
        <section className="page-section about-heading">
            <div className="container">
                <img className="img-fluid rounded about-heading-img mb-3 mb-lg-0" src={about} alt=""/>
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
    );
};

export default About