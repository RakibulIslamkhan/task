import React, { useEffect } from "react";
import "./HeroSection.css";
import Aos from "aos";
// import "aos/dist/aos.css";
import { BsXLg } from "react-icons/bs";
export default function HeroSection() {
  const [popup, setPopUp] = React.useState(false);
  useEffect(() => {
    Aos.init();
    const timer = setTimeout(() => {
      setPopUp(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);
  setTimeout(() => {}, 1000);
  return (
    <section className="hero-container">
      <div
        className="hero-content"
        data-aos="fade-right"
        data-aos-easing="ease-in-sine"
        data-aos-duration="1000"
        data-aos-delay="500"
      >
        <h3>Good design makes great business</h3>
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
        className="hero-img"
        data-aos="fade-left"
        data-aos-easing="ease-in-sine"
        data-aos-duration="1000"
        data-aos-delay="500"
      >
        <img src="../hero-bg.png" alt="" />
        {popup && (
          <div className="hero-support">
            <h3>Welcome to Techport</h3>
            <p style={{ margin: "1rem 0" }}>
              Showcase your work.Find new inspiration,hand-picked just for you.
            </p>
            <button
              type="button"
              style={{
                borderRadius: "10px",
                padding: "4px 8px",
                background: "#630EB2",
                color: "#fff",
                border: "none",
              }}
            >
              Sign in with Google
            </button>
            <BsXLg
              style={{
                position: "relative",
                bottom: "6rem",
                left: "4rem",
                cursor: "pointer",
              }}
              size="0.8rem"
            />
          </div>
        )}
      </div>
    </section>
  );
}
