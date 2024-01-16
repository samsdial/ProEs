import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import CarouselEndData from "./CarouselEndData";
import VideoModal from "./VideoModal";

function CarouselEnd() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  const settings = {
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    fade: true,
  };

  return (
    <div className="mt-5 pt-5 position-relative" id="home">
      <Slider {...settings}>
        {CarouselEndData.map((item, index) => (
          <div key={index + 2} className="w-100">
            <div
              style={{
                height: "80vh",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundColor: "black",
                backgroundImage: `url(${item.image})`,
              }}
            >
              <div className="container pt-5">
                <div className="row mr-0 ml-0">
                  <div className="col-md-12 col-lg-6 py-lg-5 px-0">
                    <h1
                      className="display-1 font-secondary text-white mt-n3 mb-md-2"
                      data-aos="fade-up"
                    >
                      {item.title}
                    </h1>
                    <div className="d-inline-block py-3 pr-2">
                      <h3
                        className="h3 font-weight-light text-white m-0"
                        data-aos="fade-up"
                      >
                        {item.description}
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="d-flex">
                  <a
                    href={item.button1.href}
                    className={item.button1.className}
                    data-aos="fade-right"
                  >
                    {item.button1.text}
                  </a>
                  <button
                    className={item.button2.className}
                    onClick={openModal}
                    data-aos="fade-left"
                  >
                    <span></span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
      {CarouselEndData.map((item, index) => (
        <>
          {item.additionalInfo && (
            <div
              key={index + 1}
              className="position-absolute w-100"
              style={item.additionalInfo.style}
            >
              <div className="container">
                <div className="d-flex align-items-center">
                  <h2
                    className="text-white font-weight-light text-monospace mb-0"
                    data-aos="flip-down"
                  >
                    {item.additionalInfo.content.title1}
                  </h2>
                  <div
                    className="d-inline-block box-line mx-2"
                    data-aos="zoom-in"
                  ></div>
                  <h2
                    className="text-white font-weight-light text-monospace mb-0"
                    data-aos="flip-down"
                  >
                    {item.additionalInfo.content.title2}
                  </h2>
                </div>
              </div>
            </div>
          )}
        </>
      ))}
      <VideoModal show={isModalOpen} onHide={() => setIsModalOpen(false)} />
    </div>
  );
}

export default CarouselEnd;
