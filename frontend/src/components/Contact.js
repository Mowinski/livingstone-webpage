import React from "react";
import ReactSafeHtml from "react-safe-html";
import { StateContext } from "./App";
import ContactForm from "./ContactForm";

const Contact = () => {
  const stateContext = React.useContext(StateContext);
  const component = ReactSafeHtml.components.makeElements({style: true, class: true});

  return (
    <section className="page-section about-heading">
      <div className="container">
        <img
          className="img-fluid rounded about-heading-img mb-3 mb-lg-0"
          src={stateContext.state.contact_image}
          alt="Contact background image"
        />
        <div className="about-heading-content">
          <div className="row">
            <div className="col-xl-9 col-lg-10 mx-auto">
              <div className="bg-faded rounded p-5">
                <ReactSafeHtml html={stateContext.state.contact_text} components={component}/>
              </div>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-12 mx-auto">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
