import Modal from "react-bootstrap/Modal";

function VideoModal({ show, onHide }) {
  return (
    <Modal show={show} onHide={onHide} size="lg">
      <Modal.Header closeButton>
        <Modal.Title>Video Modal</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="embed-responsive embed-responsive-16by9">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/watch?v=nUotP3TTHIcVNmkx"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default VideoModal;
