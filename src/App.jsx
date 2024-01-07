import About from "./component/About";
import WhatWeDo from "./component/WhatWeDo";
import CarouselEnd from "./component/CarouselEnd";
import Footer from "./component/Footer";
import Navbar from "./component/Navbar";
import Rsvp from "./component/Rsvp";
import Contact from "./component/Contact";
import CallToAction from "./component/CallToAction";

function App() {
  return (
    <>
      <Navbar />
      <CarouselEnd />
      <About />
      <WhatWeDo />
      <Contact />
      <Rsvp /> 
      <CallToAction />
      <Footer />
    </>
  );
}

export default App;
