import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import ContactForm from "./ContactForm";
import { StateContext } from "./App";

const Social = () => {
  const stateContext = React.useContext(StateContext);
  const links = stateContext.state.links;

  return (
    <>
      <div className="stripe-up-full mt-5"/>
      <section className="cta">
        <div className="row">
          <div className="col-offset-1 col-11 mx-auto rounded">
            <h2 className="section-heading mb-5">Contact</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-md-offset-1 col-md-4 col-sm-12 col-xs-12 text-center mx-sm-auto mx-xs-auto rounded">
            <ContactForm />
          </div>
          <div className="col-md-2 hide-on-mobile text-center">
          </div>
          <div className="col-md-4 col-sm-12 col-xs-12 text-right mx-auto rounded">
            <a href={links.facebook} target="_blank" className="mx-3 livingstone-color">
              <FontAwesomeIcon icon={["fab", "facebook-square"]} size="3x" />
            </a>
            <a href={links.instagram} target="_blank" className="mx-3 livingstone-color">
              <FontAwesomeIcon icon={["fab", "instagram"]} size="3x" />
            </a>
            <a href={links.twitter} target="_blank" className="mx-3 livingstone-color">
              <FontAwesomeIcon icon={["fab", "twitter"]} size="3x" />
            </a>
          </div>
        </div>
      </section>
      <div className="stripe-down-full mb-5"/>
    </>
  );
};

export default Social;
