import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./serviceSlider.scss";
import circleTexture from "../../../assets/circle-texture.png";

const settings = {
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 1,
  fade: false,
  draggable: true,
  infinite: true,
  speed: 500,
  autoplay: true,
  autoplaySpeed: 6000,
  centerMode: true,
  centerPadding: "125px",
  arrows: true,
  dots: false,
  pauseOnHover: true,
};

const ServiceSlider = ({ services }) => {
  console.log("services", services);
  return (
    <Slider className="services-slider" {...settings}>
      {services.map((service, index) => {
        return (
          <div className="services-slider-slide" key={index}>
            <div className="services-slider-slide-icon">
              <img
                src={service.icon.node.sourceUrl}
                alt={service.icon.node.altText}
              />
            </div>
            <div className="services-slider-slide-title">
              <h3 dangerouslySetInnerHTML={{ __html: service.title }}></h3>
            </div>
            <div className="services-slider-slide-texture">
              <img src={circleTexture.src} alt={service.title} />
            </div>
          </div>
        );
      })}
    </Slider>
  );
};

export default ServiceSlider;
