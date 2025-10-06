import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./testimonials.scss";

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
  arrows: false,
  dots: true,
  pauseOnHover: true,
};

const Testimonials = ({ data, testimonials }) => {
  if (!data.displayTestimonials) return null;
  return (
    <div className="testimonials-slider">
      <div className="testimonials-slider-wrapper">
        <div className="testimonials-slider-title">
          <h2>{data.title}</h2>
        </div>
        <Slider className="testimonials-slider-slider" {...settings}>
          {testimonials.nodes.map((testimonial, index) => {
            return (
              <div className="testimonials-slider-slide" key={index}>
                <div
                  dangerouslySetInnerHTML={{
                    __html: testimonial.testimonialsPost.content,
                  }}
                />
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonials;
