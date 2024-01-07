import { BsBalloonHeart } from "react-icons/bs";
import StoryOne from "../assets/story-1.jpg";
import StoryTwo from "../assets/story-2.jpg";
import StoryThree from "../assets/story-3.jpg";
import StoryFourth from "../assets/story-4.jpg";

function Story() {
  return (
    <div className="container-fluid py-5" id="story">
      <div className="container pt-5 pb-3">
        <div className="section-title position-relative text-center">
          <h6
            className="text-uppercase text-primary mb-3"
            style={{ letterSpacing: "3px" }}
          >
            Story
          </h6>
          <h1 className="font-secondary display-4">Our Love Story</h1>
          <BsBalloonHeart className="fa-2x text-dark" />
        </div>
        <div className="container timeline position-relative p-0">
          <div className="row">
            <div className="col-md-6 text-center text-md-right">
              <img className="img-fluid mr-md-3" src={StoryOne} alt="" />
            </div>
            <div className="col-md-6 text-center text-md-left">
              <div className="h-100 d-flex flex-column justify-content-center bg-secondary p-4 ml-md-3">
                <h4 className="mb-2">First Meet</h4>
                <p className="text-uppercase mb-2">01 Jan 2050</p>
                <p className="m-0">
                  Lorem elitr magna stet rebum dolores sed. Est stet labore est
                  lorem lorem at amet sea, eos tempor rebum, labore amet ipsum
                  sea lorem, stet rebum eirmod amet. Kasd clita kasd stet amet
                  est dolor elitr.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 text-center text-md-right">
              <div className="h-100 d-flex flex-column justify-content-center bg-secondary p-4 mr-md-3">
                <h4 className="mb-2">First Date</h4>
                <p className="text-uppercase mb-2">01 Jan 2050</p>
                <p className="m-0">
                  Lorem elitr magna stet rebum dolores sed. Est stet labore est
                  lorem lorem at amet sea, eos tempor rebum, labore amet ipsum
                  sea lorem, stet rebum eirmod amet. Kasd clita kasd stet amet
                  est dolor elitr.
                </p>
              </div>
            </div>
            <div className="col-md-6 text-center text-md-left">
              <img className="img-fluid ml-md-3" src={StoryTwo} alt="" />
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 text-center text-md-right">
              <img className="img-fluid mr-md-3" src={StoryThree} alt="" />
            </div>
            <div className="col-md-6 text-center text-md-left">
              <div className="h-100 d-flex flex-column justify-content-center bg-secondary p-4 ml-md-3">
                <h4 className="mb-2">Proposal</h4>
                <p className="text-uppercase mb-2">01 Jan 2050</p>
                <p className="m-0">
                  Lorem elitr magna stet rebum dolores sed. Est stet labore est
                  lorem lorem at amet sea, eos tempor rebum, labore amet ipsum
                  sea lorem, stet rebum eirmod amet. Kasd clita kasd stet amet
                  est dolor elitr.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 text-center text-md-right">
              <div className="h-100 d-flex flex-column justify-content-center bg-secondary p-4 mr-md-3">
                <h4 className="mb-2">Enagagement</h4>
                <p className="text-uppercase mb-2">01 Jan 2050</p>
                <p className="m-0">
                  Lorem elitr magna stet rebum dolores sed. Est stet labore est
                  lorem lorem at amet sea, eos tempor rebum, labore amet ipsum
                  sea lorem, stet rebum eirmod amet. Kasd clita kasd stet amet
                  est dolor elitr.
                </p>
              </div>
            </div>
            <div className="col-md-6 text-center text-md-left">
              <img className="img-fluid ml-md-3" src={StoryFourth} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Story;
