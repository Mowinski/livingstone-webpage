import React from "react";
import { MAILCHAMP_URL } from "../config";

const NewsletterForm = () => (
  <form
    id="newsletter-form"
    action={MAILCHAMP_URL}
    method="post"
    name="mc-embedded-subscribe-form"
    target="_blank"
  >
    <div className="input-group mb-3 mx-auto">
      <input
        type="email"
        name="EMAIL"
        className="form-control"
        placeholder="enter you email"
        aria-label="Recipient's email"
        aria-describedby="button-addon2"
        required
      />
      <div className="input-group-append">
        <div
          style={{ position: "absolute", left: "-5000px" }}
          aria-hidden="true"
        >
          <input
            type="text"
            name="b_8730ab68fcc739b35333c73bd_441b172caa"
            tabIndex="-1"
            value=""
            onChange={() => {}}
          />
        </div>

        <button
          className="btn btn-contact"
          type="submit"
          value="Subscribe"
          name="subscribe"
          id="button-addon2"
          aria-label="Send message"
          onChange={() => {}}
        >
          <i className="fa fa-paper-plane text-white" />
        </button>
      </div>
    </div>
  </form>
);

export default NewsletterForm;
