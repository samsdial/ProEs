import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import CallToActionData from "./CallToActionData";
function CallToAction() {
  const { id, backgroundImage, content } = CallToActionData;

  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  return (
    <div className="container-fluid py-5" id={id}>
      <div className="container py-5 d-flex">
        <div
          className="d-flex align-items-center rounded-lg px-5 w-100 text-center"
          style={{
            height: "60vh",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundColor: "black",
            backgroundImage: `url(${backgroundImage})`,
          }}
        >
          <div className="d-flex flex-column">
            <h2 className="h1 text-white mb-4" data-aos="fade-up">
              {content.title}
            </h2>
            <div className="action mt-2" data-aos="fade-up">
              <a
                href={content.action.buttonLink}
                className="btn btn-secondary mr-5"
              >
                {content.action.buttonText}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CallToAction;
