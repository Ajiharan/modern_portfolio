import React from "react";
import { Container } from "./style";
import emailIcon from "../../assets/email-icon.svg";
import phoneIcon from "../../assets/phone-icon.svg";
import Form from "components/contact-form/Form";
const Contact = () => {
  return (
    <Container id="contato">
      <header>
        <h2>Contact me</h2>
        <p>
          If you've seen my potential or want to talk to me, don't hesitate to
          send me a message.
        </p>
      </header>
      <div className="contacts">
        <div>
          <img src={emailIcon} alt="Email" />
          <a href="baskaranajiharan1243@gmail.com">
            baskaranajiharan1243@gmail.com
          </a>
        </div>
        <div>
          <img src={phoneIcon} alt="number" />
          <a href="tel:+012345678">(94) 012345678</a>
        </div>
      </div>
      <Form />
    </Container>
  );
};

export default Contact;
