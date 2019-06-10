import {SET_IMAGES, SET_ABOUT_TEXT, SET_CONTACT_TEXT} from './actions';

const appReducer = (state, action) => {
    switch (action.type) {
        case SET_IMAGES:
            action.payload.forEach((image) => preloadImage(image.image));
            return {
                ...state,
                gallery_images: action.payload,
            };

        case SET_ABOUT_TEXT:
            return {
                ...state,
                about_text: action.payload,
            };

        case SET_CONTACT_TEXT:
            return {
                ...state,
                contact_text: action.payload,
            };

        default:
            return state;
    }
};


function preloadImage(imageSrc) {
    const image = new Image();
    image.src = imageSrc;
}


export default appReducer;