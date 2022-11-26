import React from "react";
import { ContactForm } from "../components/ContactForm";

const Contactus = () => {
  return (
    <>
      <section className="bg-image3">
        <div className="container">
          <div className="breadcrumb">
            <h1>Contact Us</h1>
            <img
              src="https://www.headbase.tech/wp-content/uploads/2021/12/about-us-banner.svg"
              alt="about-us-banner"
            />
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="contact">
            <div className="contact-details">
              <div className="contact-information">
                <div className="contact-box">
                  <div className="contact-box-image">
                    <img
                      src="https://www.headbase.tech/wp-content/themes/headbase/images/addres.svg"
                      alt="address"
                    />
                  </div>
                  <div className="box-content">
                    <h4>Reg. Office</h4>
                    <p>
                      408-Zircon plus, opp. avalon commercial hub b/s ankur
                      school, Aamba talavadi, Surat, Gujarat 395004.
                    </p>
                  </div>
                </div>
                <div className="contact-box">
                  <div className="contact-box-image">
                    <img
                      src="https://www.headbase.tech/wp-content/themes/headbase/images/conatct-write.svg"
                      alt="conatct-write"
                    />
                  </div>
                  <div className="box-content">
                    <h4>WRITE TO US</h4>
                    <a href="mailto:headbase.tech@gmail.com">
                      headbase.tech@gmail.com
                    </a>
                  </div>
                </div>
                <div className="contact-box">
                  <div className="contact-box-image">
                    <img
                      src="https://www.headbase.tech/wp-content/themes/headbase/images/contact-call.svg"
                      alt="contact-call"
                    />
                  </div>
                  <div className="box-content">
                    <h4>JUST CALL US</h4>
                    <a href="tel:91+ 7819942899">91+ 7819942899</a>
                  </div>
                </div>
                <div className="contact-box">
                  <div className="contact-box-image">
                    <img
                      src="https://www.headbase.tech/wp-content/themes/headbase/images/contact-skype.svg"
                      alt="contact-skype"
                    />
                  </div>
                  <div className="box-content">
                    <h4>SKYPE WITH US</h4>
                    <p>rahulsatasiya / shiv_talk</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="contact-form">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contactus;
