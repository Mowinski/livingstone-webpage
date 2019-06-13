import React from 'react';
import {StateContext} from "./App";


const Gallery = () => {
    const stateContext = React.useContext(StateContext);

    const renderDescription = (description, floatingClass) => {
        if(!description) return (<></>);
        return (
            <div className={"product-item-description d-flex " + floatingClass}>
                <div className="bg-faded p-5 rounded">
                    <p className="mb-0">{description}</p>
                </div>
            </div>
        )
    };

    const renderImage = (image, index) => {
        const headerClass = index % 2 === 0 ? "ml-auto" : 'mr-auto';
        const descriptionClass =  index % 2 === 0 ? "mr-auto" : 'ml-auto';
        return (
            <section className="page-section" key={image.id}>
                <div className="container">
                    <div className="product-item">
                        <div className="product-item-title d-flex">
                            <div className={"bg-faded p-5 d-flex rounded " + headerClass}>
                                <h2 className="section-heading mb-0">
                                    <span className="section-heading-upper">{image.name}</span>
                                </h2>
                            </div>
                        </div>
                        <img className="product-item-img mx-auto mx-xs-0 d-flex rounded mb-3 mb-lg-0 fluid"
                             src={image.image}
                             alt={image.name}/>
                        {renderDescription(image.description, descriptionClass)}
                    </div>
                </div>
            </section>
        );
    };

    let images = stateContext.state.gallery_images.map((image, index) => renderImage(image, index));

    return (
        <>
            {images}
        </>
    );
};


export default Gallery