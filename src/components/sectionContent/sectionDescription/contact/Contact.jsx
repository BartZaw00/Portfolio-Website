import React from "react";
import { BsTelephone } from "react-icons/bs";
import { AiOutlineLinkedin } from "react-icons/ai";
import { IoMailOpenOutline } from "react-icons/io5";

import "./contact.css";

const Contact = () => {
  return (
    <>
      <div className="c-contact">
        <p className="c-contact__paragraph">
          Feel{" "}
          <span className="c-contact__paragraph c-contact__paragraph--bold">
            free
          </span>{" "}
          to contact me!
        </p>
        <div className="c-contact__details">
          <div className="c-contact__icons">
            <BsTelephone color="rgb(250, 191, 48)" />
            <AiOutlineLinkedin color="rgb(250, 191, 48)" />
            <IoMailOpenOutline color="rgb(250, 191, 48)" />
          </div>
          <div className="c-contact__detail">
            <span>727-612-510</span>
            <a href="https://www.linkedin.com/in/bzawadka/" target="_blank">
              @bzawadka
            </a>
            <span>bart.zaw00@gmail.com</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
