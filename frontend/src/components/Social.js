import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import NewsletterForm from "./NewsletterForm";
import { StateContext } from "./App";
import SocialIcons from "./SocialIcons";

const Social = () => {
  const stateContext = React.useContext(StateContext);
  const links = stateContext.state.links;

  return (
    <>
      <div className="stripe-up-full mt-5" />
      <section className="cta">
        <div className="row">
          <div className="offset-md-3 col-8 col-sm-12 col-12 text-sm-center text-center text-md-left rounded">
            <h2 className="section-heading mb-5">Stay contact with us</h2>
          </div>
        </div>
        <div className="row">
          <div className="offset-md-3 col-md-3 col-sm-12 col-12 rounded">
            <NewsletterForm />
          </div>
          <div className="offset-md-1 col-md-5 col-sm-12 col-12 text-sm-center text-center text-md-left rounded">
            <SocialIcons />
          </div>
        </div>
      </section>
      <div className="stripe-down-full mb-5" />
    </>
  );
};

export default Social;
