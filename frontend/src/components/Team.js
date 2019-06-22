import React from "react";
import { StateContext } from "./App";

const Team = () => {
  const stateContext = React.useContext(StateContext);

  const renderImage = image => (
    <div className={"col-sm-6 col-xs-12 col-md-" + image.span} key={image.id}>
      <img
        className="mx-auto d-flex rounded img-responsive"
        src={image.avatar}
        alt={image.name + " " + image.position}
      />
      <p>{image.name}</p>
      <p>{image.position}</p>
    </div>
  );
  const images = stateContext.state.team_members.map(image =>
    renderImage(image)
  );

  return (
    <>
      <div className="stripe-up-full mt-5" />
      <section className="cta">
        <div className="container">
          <div className="row">
            <div className="col-xl-9 mx-auto">
              <div className="cta-inner text-center rounded">
                <h2 className="section-heading mb-4">
                  <span className="section-heading-lower">Our Team</span>
                </h2>
                <div className="row">{images}</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="stripe-down-full mb-5" />
    </>
  );
};

export default Team;
