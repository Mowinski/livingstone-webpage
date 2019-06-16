import {SET_IMAGES, SET_ABOUT, SET_CONTACT, SET_TEAM_MEMBERS, SET_WEAPONS} from './actions';

const appReducer = (state, action) => {
    switch (action.type) {
        case SET_IMAGES:
            action.payload.forEach((image) => preloadImage(image.image));
            return {
                ...state,
                gallery_images: action.payload,
            };

        case SET_ABOUT:
            preloadImage(action.payload.image);
            return {
                ...state,
                about_text: action.payload.text,
                about_image: action.payload.image
            };

        case SET_CONTACT:
            preloadImage(action.payload.image);
            return {
                ...state,
                contact_text: action.payload.text,
                contact_image: action.payload.image,
            };

        case SET_TEAM_MEMBERS:
            action.payload.forEach((image) => preloadImage(image.avatar));
            return {
                ...state,
                team_members: action.payload,
            };

        case SET_WEAPONS:
            action.payload.forEach((image) => preloadImage(image.image));
            return {
                ...state,
                weapons: action.payload,
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