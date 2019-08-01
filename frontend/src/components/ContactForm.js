import React from "react";
import {sendMessage} from "../services";

const ContactForm = () => {

  const [author, setAuthor] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [messageStatus, setMessageStatus] = React.useState("");
  const [isFormVisibility, setFormVisibility] = React.useState(true);

  const handleSubmit = (event) => {
    setFormVisibility(false);
    setMessageStatus("Sending...");
    sendMessage(author, email, message).then((status) => {
      if(!status) {
        setMessageStatus("Temporary problem with email server. Please contact us by facebook or to email: kamil.mowinski@vulpesoft.pl");
        setFormVisibility(true);
        return;
      }
      setMessageStatus("Message sent. Please leave your email in our newsletter, to ensure be up to date with Dr Livingstone, I Presume?");
    });
    event.preventDefault();
  };

  const form = (
    <>
      <div className="input-group mb-3 mx-auto">
        <input
          type="name"
          className="form-control full-round"
          placeholder="enter you name"
          aria-label="Recipient's username"
          onChange={(event) => setAuthor(event.target.value)}
          required
        />
      </div>
      <div className="input-group mb-3 mx-auto">
        <input
          type="email"
          className="form-control full-round"
          placeholder="enter you email"
          aria-label="Recipient's email"
          onChange={(event) => setEmail(event.target.value)}
          required
        />
      </div>
      <div className="input-group mb-3 mx-auto">
        <textarea
          className="form-control full-round"
          placeholder="Your message"
          aria-label="Message"
          onChange={(event) => setMessage(event.target.value)}
          required
        />
      </div>
      <div className="input-group-btn mb-3 mx-auto text-center">
        <button type="submit" className="btn btn-primary full-round ">Submit</button>
      </div>
    </>
  );

  return (
    <form id="contact-form" onSubmit={handleSubmit}>
      {messageStatus ? <div className="mb-3 mx-auto text-center text-warning">{messageStatus}</div> : ""}
      {isFormVisibility ? form : <></>}
    </form>
  )
};

export default ContactForm;
