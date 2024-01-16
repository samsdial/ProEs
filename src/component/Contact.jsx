import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import ContactData from "./ContactData";
import NavbarData from "./NavabarData";

function Contact() {
  const { contact } = NavbarData;
  const { id, title, subtitle, paragraph } = ContactData;

  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  return (
    <div className="container-fluid py-5" id={id}>
      <div className="container py-5 d-flex">
        <div className="row justify-content-between">
          <div className="col-lg-6 d-flex flex-column">
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
          </div>
          <div className="col-lg-4 pt-5">
            <div className="mb-5" data-aos="fade-left">
              <div className="mintitle mb-3">
                <h3 className="h4">Llámanos</h3>
              </div>
              <div className="paragraf">
                <a
                  href={contact.phone.link}
                  target="_blank"
                  className="text-body"
                  rel="noreferrer"
                >
                  {contact.phone.number}
                </a>
                <span className="text-body mx-3 d-block d-lg-inline-block">
                  /
                </span>
                <a
                  href={contact.email.link}
                  target="_blank"
                  className="text-body"
                  rel="noreferrer"
                >
                  {contact.email.text}
                </a>
                <hr />
              </div>
            </div>
            <div className="mb-5" data-aos="fade-left">
              <div className="mintitle mb-3">
                <h3 className="h4">Oficina</h3>
              </div>
              <div className="paragraf">
                <a
                  href={contact.address.link}
                  target="_blank"
                  className="text-body"
                  rel="noreferrer"
                >
                  {contact.address.barrio} <br />
                  Dirección: {contact.address.text}
                </a>
                <hr />
              </div>
            </div>
            <div className="mb-5" data-aos="fade-left">
              <div className="mintitle mb-3">
                <h3 className="h4">Horario de atención</h3>
              </div>
              <div className="paragraf">
                De lunes a viernes: {contact.attention.week} <br />
                Sábado: {contact.attention.sat}
                <hr />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
