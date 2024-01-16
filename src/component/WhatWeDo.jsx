import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { BsVinyl, BsVinylFill, BsWater } from "react-icons/bs";
import WhatWeDoData from "./WhatWeDoData";

function WhatWeDo() {
  const { title, subtitle, paragraph, list, imageSrc } = WhatWeDoData;

  const getIcon = (iconName) => {
    switch (iconName) {
      case "BsWater":
        return <BsWater />;
      case "BsVinyl":
        return <BsVinyl />;
      case "BsVinylFill":
        return <BsVinylFill />;
      default:
        return null;
    }
  };

  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  return (
    <div className="container-fluid py-5 bg-secondary" id="service">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 d-flex align-items-start flex-column">
            <div className="title mb-3">
              <h2 className="text-uppercase" data-aos="flip-left">
                {title}
              </h2>
            </div>
            <div className="subtitle mb-3" data-aos="fade-right">
              <h3 className="h1" style={{ lineHeight: "1.5" }}>
                {subtitle}
              </h3>
            </div>
            <div className="paragraf" data-aos="fade-right">
              <p>{paragraph}</p>
            </div>
            <div className="list">
              <ul className="list-unstyled">
                {list.map((item, index) => (
                  <li key={index} data-aos="fade-right">
                    <div className="title-list d-flex">
                      <div className="icon mr-3">{getIcon(item.iconName)}</div>
                      <div className="h5">{item.title}</div>
                    </div>
                    <div className="paragraf pl-4">
                      <p className="ml-2">{item.description}</p>
                      <ul className="row-list">
                        {Object.values(item.sublist).map(
                          (sublistItem, sublistIndex) => (
                            <li key={sublistIndex}>
                              <p>{sublistItem}</p>
                            </li>
                          )
                        )}
                      </ul>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="text-center" data-aos="flip-right">
              <img src={imageSrc} className="img-fluid rounded-lg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhatWeDo;
