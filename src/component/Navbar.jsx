import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import { BsFillPinMapFill, BsList, BsPhone } from "react-icons/bs";
import NavbarData from "../Data/NavabarData";
// import { Link, Element, animateScroll as scroll } from 'react-scroll';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleCloseMenu = () => {
    setIsMenuOpen(false);
  };
  const { contact, brand, links, contactButton } = NavbarData;

  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  return (
    <div className="fixed-top">
      <div className="bg-dark">
        <div className="container">
          <div className="d-flex flex-row-reverse py-2">
            <div className="caption" data-aos="fade-left">
              <a
                href={contact.phone.link}
                target="_blank"
                className="text-white"
                rel="noreferrer"
              >
                <span className="mr-2">
                  <BsPhone />
                </span>
                {contact.phone.number}
              </a>
              <span className="text-white mx-3">/</span>
              <a
                href={contact.address.link}
                target="_blank"
                className="text-white"
                rel="noreferrer"
              >
                <span className="mr-2">
                  <BsFillPinMapFill />
                </span>
                {contact.address.text}
              </a>
            </div>
          </div>
        </div>
      </div>
      <nav className="navbar shadow-sm navbar-expand-lg bg-white py-3 px-3">
        <div className="container">
          <a href={brand.link} className="navbar-brand d-block d-lg-none">
            <h2 className="font-secondary h4 text-black mb-n2">{brand.text}</h2>
          </a>
          <button
            type="button"
            className="navbar-toggler"
            data-toggle="collapse"
            onClick={handleToggleMenu}
          >
            <BsList />
          </button>
          <div
            className={`collapse navbar-collapse justify-content-between ${
              isMenuOpen ? "show" : ""
            }`}
            id="navbarCollapse"
          >
            <a
              href={brand.link}
              className="navbar-brand mr-5 d-none d-lg-block"
            >
              <h2 className="font-secondary h4 text-black mb-n2">
                {brand.text}
              </h2>
            </a>
            <div className="navbar-nav ml-auto py-0">
              {links.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  className="nav-item nav-link"
                  onClick={handleCloseMenu}
                >
                  {link.text}
                </a>
              ))}
            </div>
            <div className="navbar-nav ml-lg-5 py-0">
              <a
                href={contactButton.href}
                type="button"
                className={contactButton.className}
                onClick={handleCloseMenu}
                data-aos="zoom-in"
              >
                {contactButton.text}
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
