import { BsBalloonHeart } from "react-icons/bs";

function Event() {
  return (
    <div className="container-fluid py-5" id="event">
      <div className="container py-5">
        <div className="section-title position-relative text-center">
          <h6
            className="text-uppercase text-primary mb-3"
            style={{ letterSpacing: "3px" }}
          >
            Evento
          </h6>
          <h1 className="font-secondary display-4">Nuestra Boda</h1>
          <BsBalloonHeart className="fa-2x text-dark" />
        </div>
        <div className="row justify-content-center">
          <div className="col-md-6 text-center">
            <h2 className="mb-3">● 18 Nov 2023 ●</h2>
            <h5 className="font-weight-normal text-muted mb-3 pb-3">
              Soacha, Cundinamarca, Colombia
            </h5>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 border-right border-primary">
            <div className="text-center text-md-right mr-md-3 mb-4 mb-md-0">
              <img className="img-fluid mb-4" src="img/event-1.jpg" alt="" />
              <h4 className="mb-3">Ceremonia</h4>
              <p className="mb-4 fa-2x">05:00PM</p>
              <p className="mb-2">Parroquia apóstol san Mateo</p>
              <p className="mb-2">Cra 6 A este # 30 d 05</p>
              <p className="mb-2">Soacha, San Mateo</p>
              <a
                href="https://maps.app.goo.gl/BnQ3vrFCarbwQe3E7"
                target="_blank"
                className="btn btn-outline-primary font-weight-bold m-1 py-2 px-4"
                rel="noreferrer"
              >
                Mapa
              </a>
            </div>
          </div>
          <div className="col-md-6">
            <div className="text-center text-md-left ml-md-3">
              <img className="img-fluid mb-4" src="img/event-2.jpg" alt="" />
              <h4 className="mb-3">Recepción</h4>
              <p className="mb-4 fa-2x">07:00PM</p>
              <p className="mb-2">Salón casa diamante</p>
              <p className="mb-2">Cra 7 A # 19A -82 tercer piso</p>
              <p className="mb-2">Soacha, Diagonal estadio municipal</p>
              <a
                href="https://maps.app.goo.gl/YXvkkJWYSnvW2jSn6"
                target="_blank"
                className="btn btn-outline-primary font-weight-bold m-1 py-2 px-4"
                rel="noreferrer"
              >
                Mapa
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Event;
