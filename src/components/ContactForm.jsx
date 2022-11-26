import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import SelectField from "./SelectField";

export const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_sglmtfa",
        "template_k53rq1e",
        form.current,
        "glISqpGMGondY0f4D"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <input type="text" placeholder="Your Name*" name="user_name" />
      <input type="number" placeholder="Contact No*" name="user_contact" />
      <input type="email" placeholder="Email*" name="user_email" />
      <SelectField />
      <textarea placeholder="Message*" name="message" />
      <input type="submit" value="Submit" />
    </form>
  );
};
