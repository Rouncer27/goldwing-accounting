import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./testimonialsSlider.scss";
import brushStrokeGray from "../../assets/brushstroke-gray.png";

const settings = {
  slidesToShow: 1,
  slidesToScroll: 1,
  initialSlide: 1,
  fade: false,
  draggable: true,
  infinite: true,
  speed: 500,
  autoplay: true,
  autoplaySpeed: 6000,
  centerMode: false,
  centerPadding: "0px",
  arrows: true,
  dots: false,
  pauseOnHover: true,
};

const Testimonials = ({ data, testimonials }) => {
  return (
    <div className="testimonials-slider">
      <div className="testimonials-slider-wrapper">
        <div className="testimonials-slider-image">
          <img src={data.image.node.sourceUrl} alt={data.title} />
        </div>

        <div className="testimonials-slider-content">
          <div className="testimonials-slider-title">
            <h2>{data.title}</h2>
          </div>

          <Slider className="testimonials-slider-slider" {...settings}>
            {testimonials?.map((testimonial, index) => {
              return (
                <div className="testimonials-slider-slide" key={index}>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: testimonial.testimonialsPost.content,
                    }}
                  />
                  <div className="testimonials-slider-slide-name">
                    <p>{testimonial.title}</p>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
      <div className="testimonials-slider-brush-stroke-top">
        <img src={brushStrokeGray.src} alt="" />
      </div>
      <div className="testimonials-slider-brush-stroke-bottom">
        <img src={brushStrokeGray.src} alt="" />
      </div>
    </div>
  );
};

export default Testimonials;
