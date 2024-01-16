import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import NavbarData from "./NavabarData";

function Footer() {
  const { brand, links, social, copy } = NavbarData;
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  return (
    <div
      className="container-fluid bg-dark text-white pt-5 pb-1"
      id="footer"
      style={{ marginTop: "90px" }}
    >
      <div className="container text-center">
        <div className="row justify-content-between mb-4">
          <div className="col-md text-left" data-aos="fade-up">
            <a href={brand.link} className="navbar-brand text-white d-block">
              <h2 className="font-secondary h4 text-white mb-2">
                {brand.text}
              </h2>
            </a>
          </div>
          <div className="col-md-2 text-right" data-aos="fade-up">
            <h2 className="h6 text-bold text-white">Menu</h2>
            {links.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className="text-white text-right nav-link px-0"
              >
                {link.text}
              </a>
            ))}
          </div>
          <div className="col-md-2 text-right" data-aos="fade-up">
            <h2 className="h6 text-bold text-white">Social Media</h2>
            {social.map((link) => (
              <a
                key={link.id}
                href={link.href}
                target="_blank"
                className="text-white text-right nav-link  px-0"
                rel="noreferrer"
              >
                {link.text}
              </a>
            ))}
          </div>
        </div>
        <div className="row justify-content-between">
          <div className="col-md text-center">
            <a
              href={copy.link}
              target="_blank"
              className="navbar-brand text-gray d-block"
              rel="noreferrer"
            >
              <h2 className="font-secondary caption text-secondary">
                {copy.text}
              </h2>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
