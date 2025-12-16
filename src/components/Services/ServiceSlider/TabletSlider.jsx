import React, { useState, useEffect } from "react";
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
  slidesToShow: 2,
  slidesToScroll: 1,
  initialSlide: 1,
};
const TabletSlider = ({ services }) => {
  const [isTablet, setIsTablet] = useState(true);

  // Track window width
  useEffect(() => {
    const checkMobile = () => {
      setIsTablet(window.innerWidth < 1024 && window.innerWidth > 768);
    };

    checkMobile(); // initial check
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // If mobile, return null (unmount slider)
  if (!isTablet) return null;
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

export default TabletSlider;
