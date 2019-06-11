import React from "react";
import {StateContext} from "./App";

const Weapons = () => {
    const stateContext = React.useContext(StateContext);
    const renderImage = (image) => (
        <div className={"col-sm-6 col-xs-12 col-md-" + image.span} key={image.id}>
            <img className="mx-auto d-flex rounded img-responsive" src={image.image} alt={image.name}/>
            <p>{image.name}</p>
        </div>
    );

    const images = stateContext.state.weapons.map((image) => renderImage(image));

    return (
        <section className="page-section cta">
            <div className="container">
                <div className="row">
                    <div className="col-xl-9 mx-auto">
                        <div className="cta-inner text-center rounded">
                            <h2 className="section-heading mb-4">
                                <span className="section-heading-lower">Our Weapons</span>
                            </h2>
                            <div className="row">
                                {images}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Weapons