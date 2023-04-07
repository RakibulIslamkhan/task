import React from "react";
import "./Contact.css";
import { useEffect } from "react";
import Aos from "aos";
// import "aos/dist/aos.css";
export default function Contact() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <section className="contact-container">
      <div className="contact-title">
        <h3 style={{ fontSize: "1.5rem", textAlign: "center" }}>
          How it <span className="contact-span">works</span>
        </h3>
        <a
          href="/"
          style={{
            background: "#D6505B",
            borderRadius: "20px",
            padding: "4px 8px",
            color: "#fff",
          }}
        >
          Contact Us
        </a>
      </div>
      <div className="contact-timeline">
        <div className="timeline-bar">
          <div className="timeline-title">
            <h3 className="timeline-head">01</h3>
          </div>
          <div
            className="contact-faq"
            data-aos="fade-left"
            data-aos-easing="linear"
            data-aos-duration="1000"
            data-aos-delay="500"
          >
            <h3>Create design Project</h3>
            <p>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old.
            </p>
          </div>
        </div>
        <div className="timeline-bar">
          <div className="timeline-title">
            <h3 className="timeline-head">02</h3>
          </div>
          <div
            className="contact-faq"
            data-aos="fade-left"
            data-aos-easing="linear"
            data-aos-duration="1000"
            data-aos-delay="500"
          >
            <h3>Create design Project</h3>
            <p>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old.
            </p>
          </div>
        </div>
        <div className="timeline-bar">
          <div className="timeline-title">
            <h3 className="timeline-head">03</h3>
          </div>
          <div
            className="contact-faq"
            data-aos="fade-left"
            data-aos-easing="linear"
            data-aos-duration="1000"
            data-aos-delay="500"
          >
            <h3>Create design Project</h3>
            <p>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old.
            </p>
          </div>
        </div>
        {/* <div>
          <h3>02</h3>
        </div>
        <div className="contact-faq">
          <h3>Create design Project</h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
        <div>
          <h3>03</h3>
        </div>
        <div className="contact-faq">
          <h3>Create design Project</h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div> */}
      </div>
    </section>
  );
}
