import React from "react";

import NewsletterForm from "./NewsletterForm";
import SocialIcons from "./SocialIcons";

const Social = () => {
  return (
    <>
      <div className="stripe-up-full mt-5" />
      <section className="cta">
        <div className="container">
          <div className="row">
            <div className="offset-md-2 col-md-10 col-sm-12 text-sm-center text-center text-md-left rounded">
              <h2 className="section-heading mb-5">Stay contact with us</h2>
            </div>
          </div>
          <div className="row">
            <div className="offset-md-2 col-md-3 col-sm-12 rounded">
              <NewsletterForm />
            </div>
            <div className="offset-md-1 col-md-5 col-sm-12 text-sm-center text-center text-md-left rounded">
              <SocialIcons />
            </div>
          </div>
        </div>
      </section>
      <div className="stripe-down-full mb-5" />
    </>
  );
};

export default Social;
