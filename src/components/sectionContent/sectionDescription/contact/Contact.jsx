import React from "react";
import { BsTelephone } from "react-icons/bs";
import { AiOutlineLinkedin } from "react-icons/ai";
import { IoMailOpenOutline } from "react-icons/io5";

import "./contact.css";

const Contact = () => {
  return (
    <div className="section__right_content_description_contact">
      <p className="section__right_content_description_contact_paragraph">
        Feel{" "}
        <span className="section__right_content_description_contact_paragraph_word-style">
          free
        </span>{" "}
        to contact me!
      </p>
      <div className="section__right_content_description_contact_details">
        <div className="section__right_content_description_contact_details_icons">
          <BsTelephone size={100} color="rgb(250, 191, 48)" />
          <AiOutlineLinkedin size={130} color="rgb(250, 191, 48)" />
          <IoMailOpenOutline size={125} color="rgb(250, 191, 48)" />
        </div>
        <div className="section__right_content_description_contact_details_detail">
          <span>727-612-510</span>
          <a href="https://www.linkedin.com/in/bzawadka/" target="_blank">
            @bzawadka
          </a>
          <span>bart.zaw00@gmail.com</span>
        </div>
      </div>
    </div>
  );
};

export default Contact;
