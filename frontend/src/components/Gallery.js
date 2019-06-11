import React from 'react';
import {StateContext} from "./App";


const Gallery = () => {
    const stateContext = React.useContext(StateContext);
    const renderImage = (image) => {
        let description = <></>;
        if(image.description) {
            description = (
                <div className="product-item-description d-flex mr-auto">
                    <div className="bg-faded p-5 rounded">
                        <p className="mb-0">{image.description}</p>
                    </div>
                </div>);
        }
        return (
            <div className="col-md-12 col-sm-12" key={image.id}>
                <div className="product-item">
                    <div className="product-item-title d-flex">
                        <div className="bg-faded p-5 d-flex ml-auto rounded">
                            <h2 className="section-heading mb-0">
                                <span className="section-heading-upper">{image.name}</span>
                            </h2>
                        </div>
                    </div>
                    <img className="product-item-img mx-auto mx-sm-0 d-flex rounded mb-3 mb-lg-0 img-responsive" src={image.image}
                         alt={image.name}/>
                    {description}
                </div>
            </div>
        );
    };

    let images = stateContext.state.gallery_images.map((image) => renderImage(image));

    return (
        <section className="page-section">
            <div className="container">
                <div className="row">
                    {images}
                </div>
            </div>
        </section>
    );
};


export default Gallery