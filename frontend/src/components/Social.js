import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import ContactForm from "./ContactForm";
import { FACEBOOK_URL, INSTAGRAM_URL, TWITTER_URL } from "../config";

const Social = () => (
    <section className="page-section cta">
        <div className="container">
            <div className="row">
                <div className="col-12 mx-auto text-center rounded">
                    <h2 className="section-heading mb-5">Contact</h2>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6 col-sm-12 col-xs-12 text-center mx-sm-auto mx-xs-auto rounded">
                    <ContactForm/>
                </div>
                <div className="col-md-6 col-sm-12 col-xs-12 text-center mx-auto rounded">
                    <a href={FACEBOOK_URL} target="_blank" className="mx-3">
                        <FontAwesomeIcon icon={["fab", "facebook-square"]} size="3x"/>
                    </a>
                    <a href={INSTAGRAM_URL} target="_blank" className="mx-3">
                        <FontAwesomeIcon icon={["fab", "instagram"]} size="3x"/>
                    </a>
                    <a href={TWITTER_URL} target="_blank" className="mx-3">
                        <FontAwesomeIcon icon={["fab", "twitter"]} size="3x"/>
                    </a>
                </div>
            </div>
        </div>
    </section>
);

export default Social;
