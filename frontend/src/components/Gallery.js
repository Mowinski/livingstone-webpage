import React from 'react';
import {StateContext} from "./App";
import Lightbox from 'react-image-lightbox';

const Gallery = () => {
    const [isLightboxOpen, setLightboxOpen] = React.useState(false);
    const [photoIndex, setPhotoIndex] = React.useState(0);

    const stateContext = React.useContext(StateContext);

    const openCurrent = (index) => {
      setPhotoIndex(index);
      setLightboxOpen(true);
    };
    const renderImage = (image, index) => {
        return (
            <div className={"mt-1 align-self-center col-sm-6 col-xs-12 col-md-" + image.span} key={image.id}>
                <img className="product-item-img mx-auto mx-xs-0 d-flex rounded mb-3 mb-lg-0 img-fluid"
                     src={image.image}
                     alt={image.name}
                     onClick={() => openCurrent(index)}/>
            </div>
        );
    };
    const images = stateContext.state.gallery_images.map((image, index) => renderImage(image, index));

    let lightbox = (<></>);
    if (isLightboxOpen) {
        const nextIndex = (photoIndex + 1) % images.length;
        const prevIndex = (photoIndex + images.length - 1) % images.length;
        lightbox = (
            <Lightbox
                mainSrc={stateContext.state.gallery_images[photoIndex].image}
                nextSrc={stateContext.state.gallery_images[nextIndex].image}
                prevSrc={stateContext.state.gallery_images[prevIndex].image}
                onCloseRequest={() => setLightboxOpen(false)}
                onMovePrevRequest={() => setPhotoIndex(prevIndex)}
                onMoveNextRequest={() => setPhotoIndex(nextIndex)}
            />
        );
    }

    return (
        <section className="page-section cta">
            <div className="container">
                <div className="row">
                    <div className="col-xl-9 mx-auto">
                        <div className="cta-inner text-center rounded">
                            <h2 className="section-heading mb-4">
                                <span className="section-heading-lower">Gallery</span>
                            </h2>
                            <div className="row">
                                {images}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {lightbox}
        </section>
    );
};


export default Gallery