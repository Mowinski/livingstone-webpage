import {
  SET_IMAGES,
  SET_ABOUT,
  SET_CONTACT,
  SET_TEAM_MEMBERS,
  SET_WEAPONS,
  SET_LINKS,
  SET_NEWSLETTER,
} from "./actions";

const appReducer = (state, action) => {
  switch (action.type) {
    case SET_IMAGES:
      action.payload.forEach(image => preloadImage(image.image));
      return {
        ...state,
        gallery_images: action.payload
      };

    case SET_ABOUT:
      if(action.payload.image)
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
        contact_image: action.payload.image
      };

    case SET_NEWSLETTER:
      return {
        ...state,
        newsletter_text: action.payload.text
      };

    case SET_TEAM_MEMBERS:
      action.payload.forEach(image => preloadImage(image.avatar));
      return {
        ...state,
        team_members: action.payload
      };

    case SET_WEAPONS:
      action.payload.forEach(image => preloadImage(image.image));
      return {
        ...state,
        weapons: action.payload
      };
    case SET_LINKS:
      const links = {};
      action.payload.map(link => (links[link.key] = link.link));
      return {
        ...state,
        links: { ...links }
      };

    default:
      return state;
  }
};

function preloadImage(imageSrc) {
  if(!imageSrc) return;
  const image = new Image();
  image.src = imageSrc;
}

export default appReducer;
