import { BsBalloonHeart } from "react-icons/bs";

function FriendsFamilyStart() {
  return (
    <>
      <div className="container-fluid py-5" id="event">
        <div className="container py-5">
          <div className="section-title position-relative text-center">
            <h6
              className="text-uppercase text-primary mb-3"
              style={{ letterSpacing: "3px" }}
            >
              Con la bendición de
            </h6>
            <h1 className="font-secondary display-4">Nuestros Padres</h1>
            <BsBalloonHeart className="fa-2x text-dark" />
          </div>
          <div className="row">
            <div className="col-md-6 border-right border-primary">
              <div className="text-center text-md-right mr-md-3 mb-4 mb-md-0">
                <img className="img-fluid mb-4" src="img/event-1.jpg" alt="" />
                <h4 className="mb-3">Novia</h4>
                <p className="mb-2">Luis Helman Rico</p>
                <p className="mb-2">Fabiola Beltrán</p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="text-center text-md-left ml-md-3">
                <img className="img-fluid mb-4" src="img/event-2.jpg" alt="" />
                <h4 className="mb-3">Novio</h4>
                <p className="mb-2">Margarita Otálora</p>
                <p className="mb-2">William Barrios</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid py-5" id="family">
        <div className="container pt-5 pb-3">
          <div className="section-title position-relative text-center">
            <h6
              className="text-uppercase text-primary mb-3"
              style={{ letterSpacing: "3px" }}
            >
              Acompañados de
            </h6>
            <h1 className="font-secondary display-4">Nuestros Padrinos</h1>
            <BsBalloonHeart className="fa-2x text-dark" />
          </div>
          <div className="row justify-content-center">
            <div className="col-md-6 text-center">
              <p className="mb-2">Jorge Otálora</p>
              <p className="mb-2">Jennifer Vargas</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FriendsFamilyStart;
