import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import ContactForm from "./ContactForm";
import { StateContext } from "./App";

const Social = () => {
  const stateContext = React.useContext(StateContext);
  const links = stateContext.state.links;

  return (
    <>
      <div className="stripe-up-full mt-5" />
      <section className="cta">
        <div className="row">
          <div className="offset-md-3 col-8 col-sm-12 col-12 text-sm-center text-center text-md-left rounded">
            <h2 className="section-heading mb-5">Contact</h2>
          </div>
        </div>
        <div className="row">
          <div className="offset-md-3 col-md-3 col-sm-12 col-12 rounded">
            <ContactForm />
          </div>
          <div className="offset-md-1 col-md-5 col-sm-12 col-12 text-sm-center text-center text-md-left rounded">
            <a
              href={links.facebook}
              target="_blank"
              rel="noopener"
              className="mx-3 livingstone-color"
              aria-label="Follow us on Facebook"
            >
              <FontAwesomeIcon icon={["fab", "facebook-square"]} size="3x" />
            </a>
            <a
              href={links.instagram}
              target="_blank"
              rel="noopener"
              className="mx-3 livingstone-color"
              aria-label="Follow us on Instagram"
            >
              <FontAwesomeIcon icon={["fab", "instagram"]} size="3x" />
            </a>
            <a
              href={links.twitter}
              target="_blank"
              rel="noopener"
              className="mx-3 livingstone-color"
              aria-label="Follow us on Twitter"
            >
              <FontAwesomeIcon icon={["fab", "twitter"]} size="3x" />
            </a>
          </div>
        </div>
      </section>
      <div className="stripe-down-full mb-5" />
    </>
  );
};

export default Social;
