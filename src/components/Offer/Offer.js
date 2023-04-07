import React from "react";
import "./Offer.css";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
export default function Offer() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <section className="offer-container">
      <div
        className="offer-content"
        data-aos="fade-right"
        data-aos-duration="1000"
        data-aos-delay="500"
        data-aos-easing="ease-in-sine"
      >
        <h2 style={{ marginTop: "2rem" }}>What we offer?</h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </p>
      </div>
      <div
        className="offer-img"
        data-aos="fade-left"
        data-aos-duration="1000"
        data-aos-delay="500"
        data-aos-easing="ease-in-sine"
      >
        <img src="../offer.png" alt="" />
      </div>
    </section>
  );
}
