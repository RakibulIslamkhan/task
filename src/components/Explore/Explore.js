import React, { useEffect } from "react";
import "./Explore.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Aos from "aos";
const PrevButton = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", left:'-50px'}}
      onClick={onClick}
    >
      <IoIosArrowBack color="white" size={40} />
    </div>
  );
};

const NextButton = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", }}
      onClick={onClick}
    >
      <IoIosArrowForward color="white" size={40} />
    </div>
  );
};
export default function Explore() {
  useEffect(() => {
    Aos.init();
  }, []);
  let settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    initialSlide: 0,
    autoPlay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    prevArrow: <PrevButton />,
    nextArrow: <NextButton />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section className="explore-container">
      <div className="explore-title"data-aos="fade-right"
          data-aos-easing="linear">
        <h3 style={{ marginTop: "2rem" }}>Explore Designs Picked for you</h3>
      </div>
      <div>
        <Slider {...settings}>
          <div data-aos="fade-right"
          data-aos-easing="linear">
            <img src="../slide1.png" alt="" className="cate-img" />
            <p className="img-title">National Park</p>
          </div>
          <div data-aos="fade-right"
          data-aos-easing="linear">
            <img src="../slide2.png" alt="" className="cate-img" />
            <p className="img-title">Anime</p>
          </div>
          <div data-aos="fade-right"
          data-aos-easing="linear">
            <img src="../slide3.png" alt="" className="cate-img" />
            <p className="img-title">Video Game</p>
          </div>
          <div data-aos="fade-right"
          data-aos-easing="linear">
            <img src="../slide4.png" alt="" className="cate-img" />
            <p className="img-title">Movies</p>
          </div>
          <div data-aos="fade-right"
          data-aos-easing="linear">
            <img src="../slide5.png" alt="" className="cate-img" />
            <p className="img-title">Animals</p>
          </div>
          <div>
            <img src="../slide1.png" alt="" className="cate-img" />
            <p className="img-title">National Park</p>
          </div>
          <div>
            <img src="../slide2.png" alt="" className="cate-img" />
            <p className="img-title">Anime</p>
          </div>
          <div>
            <img src="../slide3.png" alt="" className="cate-img" />
            <p className="img-title">Video Game</p>
          </div>
          <div>
            <img src="../slide4.png" alt="" className="cate-img" />
            <p className="img-title">Movies</p>
          </div>
          <div>
            <img src="../slide5.png" alt="" className="cate-img" />
            <p className="img-title">Animals</p>
          </div>
        </Slider>
      </div>
    </section>
  );
}
