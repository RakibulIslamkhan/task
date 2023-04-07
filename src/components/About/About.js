import React, { useEffect } from "react";
import "./About.css";
import Aos from "aos";
// import "aos/dist/aos.css";
export default function About() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <section className="about-container">
      <div
        className="hero-img"
        data-aos="fade-right"
        data-aos-duration="1000"
        data-aos-delay="500"
        data-aos-easing="ease-in-sine"
      >
        <img src="../About.png" alt="" />
      </div>
      <div
        className="about-content"
        data-aos="fade-left"
        data-aos-easing="ease-in-sine"
        data-aos-duration="1000"
        data-aos-delay="500"
      >
        <h2 style={{ marginTop: "2rem" }}>About Our Site</h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </p>
      </div>
    </section>
  );
}
