// CarouselEndData.js
import CarouselOne from "../assets/carrosel-01.jpg";
import CarouselTwo from "../assets/carrosel-01.jpg";

const CarouselEndData = [
  {
    image: CarouselOne,
    title: "Maquila de Alimentos",
    description:
      "Transformación de partículas de alimentos, servicio de maquila",
    button1: {
      text: "¿Qué hacemos?",
      className: "btn btn-secondary mr-5",
      href: "#service",
    },
    button2: {
      className: "btn-play btn-ico-play",
    },
    additionalInfo: {
      position: "absolute",
      style: { bottom: "50px", zIndex: "999" },
      content: {
        title1: "Servicio de molienda",
        separator: "/",
        title2: "Alimentos secos y deshidratados",
      },
    },
  },
  {
    image: CarouselTwo,
    title: "Maquila de Alimentos",
    description:
      "Transformación de partículas de alimentos, servicio de maquila",
    button1: {
      text: "¿Qué hacemos?",
      className: "btn btn-secondary mr-5",
      href: "#service",
    },
    button2: {
      className: "btn-play btn-ico-play",
    },
    additionalInfo: {
      position: "absolute",
      style: { bottom: "50px", zIndex: "999" },
      content: {
        title1: "Servicio de molienda",
        separator: "/",
        title2: "Alimentos secos y deshidratados",
      },
    },
  },
];

export default CarouselEndData;
