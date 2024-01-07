import { useState } from "react";
import AboutData from './AboutData';
import VideoModal from "./VideoModal";

function About() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };
  const { title, subtitle, paragraph, buttonText, imageSrc } = AboutData;

  return (
    <>
    <div className="container-fluid py-5" id="about">
      <div className="container py-5 d-flex">
        <div className="row">
        <div className="col-12 col-lg-7 d-flex align-items-start flex-column mb-5">
          <div className="title mb-3">
            <h2 className="text-uppercase">{title}</h2>
          </div>
          <div className="subtitle mb-3">
            <h3 className="h1" style={{ lineHeight: '1.5' }}>{subtitle}</h3>
          </div>
          <div className="paragraf">
            <p>{paragraph}</p>
          </div>
          <div className="action mt-auto">
            <a href="#contact" className="btn btn-secondary mr-5">{buttonText}</a>
          </div>
        </div>
        <div className="col-12 col-lg mb-5">
          <div className="text-center position-relative">
            <div className="d-flex w-100 align-items-center justify-content-center box-icon-play-about">
              <button className="btn-play btn-ico-play" onClick={openModal}>
                <span></span>
              </button>
            </div>
            <img src={imageSrc} className="img-fluid rounded-lg position-absolute" style={{ left: "0", top: "0" }} alt="" />
          </div>
        </div>
      </div>
      </div>
    </div>
    <VideoModal show={isModalOpen} onHide={() => setIsModalOpen(false)} />
    </>
  );
}

export default About;
