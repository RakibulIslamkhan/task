import React from "react";
import { BsChevronDoubleRight } from "react-icons/bs";
import "./Categories.css";
import { useEffect } from "react";
import Aos from "aos";
// import "aos/dist/aos.css";
export default function Categories() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <section className="design-container">
      <div className="design-title" data-aos="fade-right"
          data-aos-easing="linear">
        <h3>Design for what you need</h3>
        <div className="design-cate">
          <h4>View all design categories</h4>
          <BsChevronDoubleRight />
        </div>
      </div>
      <div className="design-categories">
        <div
          className="design-card"
          data-aos="fade-right"
          data-aos-easing="linear"
        >
          <img src="../cate1.png" alt="" className="cate-img" />
          <p className="img-title">Logo & branding design</p>
        </div>
        <div
          className="design-card"
          data-aos="fade-right"
          data-aos-easing="linear"
          data-aos-delay="1500"
        >
          <img src="../cate2.png" alt="" className="cate-img" />
          <p className="img-title">Website & App design</p>
        </div>
        <div
          className="design-card"
          data-aos="fade-right"
          data-aos-easing="linear"
          data-aos-delay="2000"
        >
          <img src="../cate3.png" alt="" className="cate-img" />
          <p className="img-title">T-shirt design</p>
        </div>
        <div
          className="design-card"
          data-aos="fade-right"
          data-aos-easing="linear"
          data-aos-delay="2500"
        >
          <img src="../cate4.png" alt="" className="cate-img" />
          <p className="img-title">Poster design</p>
        </div>
        <div
          className="design-card"
          data-aos="fade-right"
          data-aos-easing="linear"
          data-aos-delay="3000"
        >
          <img src="../cate5.png" alt="" className="cate-img" />
          <p className="img-title">Social media Banner design</p>
        </div>
      </div>
    </section>
  );
}
