import React from "react";
import ReactSafeHtml from "react-safe-html";
import { StateContext } from "./App";
import ContactForm from "./ContactForm";
import NewsletterForm from "./NewsletterForm";

const Contact = () => {
  const stateContext = React.useContext(StateContext);
  const component = ReactSafeHtml.components.makeElements({style: true, class: true});

  return (
    <section className="page-section about-heading">
      <div className="container">
        <div className="about-heading-content">
          <div className="row">
            <div className="col-xl-9 col-lg-10 mx-auto">
              <div className="rounded p-5">
                <ReactSafeHtml html={stateContext.state.contact_text} components={component}/>
              </div>
            </div>
          </div>

          <div className="row mt-3">
            <div className="col-12 mx-auto">
              <ContactForm />
            </div>
          </div>

          <div className="row">
            <div className="col-xl-9 col-lg-10 mx-auto">
              <div className="rounded p-5">
                <ReactSafeHtml html={stateContext.state.newsletter_text} components={component}/>
              </div>
            </div>
          </div>

          <div className="row mt-3">
            <div className="col-12 mx-auto">
              <NewsletterForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
