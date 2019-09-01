import React from "react";
import ReactSafeHtml from "react-safe-html";

import { StateContext } from "./App";
import Weapons from "./Weapons";

const About = () => {
  const stateContext = React.useContext(StateContext);
  const component = ReactSafeHtml.components.makeElements({style: true, class: true});
  let image = <></>;
  if(stateContext.state.about_image) {
    image = <img
              className="img-fluid rounded about-heading-img mb-3 mb-lg-5"
              src={stateContext.state.about_image}
              alt="Team photo"
            />;
  }
  return (
    <>
      <section className="page-section about-heading">
        <div className="container mt-2">
          {image}
          <div className="about-heading-content">
            <div className="row">
              <div className="col-xl-9 col-lg-10 mx-auto">
                <div className="bg-faded rounded p-5">
                  <ReactSafeHtml html={stateContext.state.about_text} components={component}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Weapons />
    </>
  );
};

export default About;
