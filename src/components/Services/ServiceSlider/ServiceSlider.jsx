import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./serviceSlider.scss";
import circleTexture from "../../../assets/circle-texture.png";

const settings = {
  dots: false,
  draggable: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  centerMode: false,
  centerPadding: "0",
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
      },
    },
    {
      breakpoint: 1025,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 1250,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 2000,
      settings: {
        slidesToShow: 3,
      },
    },
  ],
};
const ServiceSlider = ({ services }) => {
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
