import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";

function Rsvp() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");
  const [loading, setLoading] = useState(false);

  function submit(e) {
    const formElement = document.querySelector("form");
    e.preventDefault();
    const formData = new FormData(formElement);
    setLoading(true);
    fetch(
      "https://script.google.com/macros/s/AKfycby970WxA6B5mjWpvB3nIAmYsSNpoEBJJchvcnnibIlIn0MtZq0pVfvCDCt6P17xDhAz1g/exec",
      {
        method: "POST",
        body: formData,
      }
    )
      .then((res) => res.text())
      .then(() => {
        setResponseMessage("Gracias por enviar el formulario.");
        setFormSubmitted(true);
      })
      .catch((err) => {
        console.log(err);
        setResponseMessage("Ocurrió un error al enviar el formulario.");
        setFormSubmitted(true);
      })
      .finally(() => {
        setLoading(false); // Cuando la solicitud finaliza, detenemos la carga
      });
  }
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);
  // https://script.google.com/macros/s/AKfycby970WxA6B5mjWpvB3nIAmYsSNpoEBJJchvcnnibIlIn0MtZq0pVfvCDCt6P17xDhAz1g/exec
  return (
    <div className="container-fluid pb-5" id="rsvp">
      <div className="container pb-5">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            {formSubmitted ? (
              <div className="text-center">
                <p>{responseMessage}</p>
              </div>
            ) : loading ? (
              <div className="text-center">
                <p>Loading...</p>
              </div>
            ) : (
              <div className="text-left">
                <form className="form" onSubmit={(e) => submit(e)}>
                  <div className="form-row mb-5">
                    <div className="form-group col-sm-6" data-aos="fade-up">
                      <label className="caption">Nombre</label>
                      <input
                        type="text"
                        className="form-control border-bottom border-dark py-4 px-3"
                        name="Name"
                      />
                    </div>
                    <div className="form-group col-sm-6" data-aos="fade-up">
                      <label className="caption">Apellido</label>
                      <input
                        type="text"
                        className="form-control border-bottom border-dark py-4 px-3"
                        name="Email"
                      />
                    </div>
                  </div>
                  <div className="form-row mb-5" data-aos="fade-up">
                    <div className="form-group col-sm-6">
                      <label className="caption">Email</label>
                      <input
                        type="email"
                        className="form-control border-bottom border-dark py-4 px-3"
                        id="numberGuests"
                        name="NumberGuest"
                      />
                    </div>
                    <div className="form-group col-sm-6" data-aos="fade-up">
                      <label className="caption">Teléfono</label>
                      <input
                        type="text"
                        className="form-control border-bottom border-dark py-4 px-3"
                        id="attending"
                        name="Attending"
                      />
                    </div>
                  </div>
                  <div className="form-group mb-5" data-aos="fade-up">
                    <label className="caption">Mensaje</label>
                    <textarea
                      className="form-control border rounded border-dark py-2 px-3"
                      rows="5"
                      placeholder="Escribe tú mensaje"
                      required="required"
                      id="message"
                      name="Message"
                    ></textarea>
                  </div>
                  <div className="text-center" data-aos="fade-up">
                    <button
                      className="btn btn-secondary font-weight-bold py-3 px-5"
                      type="submit"
                    >
                      Enviar
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Rsvp;
