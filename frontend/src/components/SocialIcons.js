import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { StateContext } from "./App";

const SocialIcons = () => {
  const stateContext = React.useContext(StateContext);
  const links = stateContext.state.links;

  return (
    <>
      <a
        href={links.facebook}
        target="_blank"
        rel="noopener"
        className="mx-3 livingstone-color"
        aria-label="Follow us on Facebook"
      >
        <FontAwesomeIcon icon={["fab", "facebook-square"]} size="3x" />
      </a>
      <a
        href={links.instagram}
        target="_blank"
        rel="noopener"
        className="mx-3 livingstone-color"
        aria-label="Follow us on Instagram"
      >
        <FontAwesomeIcon icon={["fab", "instagram"]} size="3x" />
      </a>
      <a
        href={links.twitter}
        target="_blank"
        rel="noopener"
        className="mx-3 livingstone-color"
        aria-label="Follow us on Twitter"
      >
        <FontAwesomeIcon icon={["fab", "twitter"]} size="3x" />
      </a>
    </>
  );
};

export default SocialIcons;
