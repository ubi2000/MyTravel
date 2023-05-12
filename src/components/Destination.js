import "./Destination.css";
import DestinationData from "./DestinationData";
import Mountain1 from "../images/ist.jpg";
import Mountain2 from "../images/2.jpg";
import Mountain3 from "../images/3.jpg";
import Mountain4 from "../images/4.jpg";

const Destination = () => {
  return (
    <div className="destination">
      <h1> Polpular Destinations</h1>
      <p>
        Another Escape is an exploratory publication focused on examining the
        values of outdoor living
      </p>

      <DestinationData
        className="first-des"
        heading="exposure to a true winter"
        text="sustainable ecology, and related creative projects, all toward the
      passions of readers who submit their own stories in addition to the
      publications of staff. The nature-driven topics they cover address a
      wide range of inspirational content, and the site's design offers
      close-up, high-def imagery from people exploring wildernesses from
      around the world. The homepage's large mountain range is perfect for
      their background image, and their online store is well-supported
      with thorough descriptions of their different books, prints, and
      bundle options from easy-to-browse store galleries."
        img1={Mountain1}
        img2={Mountain2}
      />
      <DestinationData
      className="first-des-reverse"
        heading="exposure to a true winter"
        text="sustainable ecology, and related creative projects, all toward the
      passions of readers who submit their own stories in addition to the
      publications of staff. The nature-driven topics they cover address a
      wide range of inspirational content, and the site's design offers
      close-up, high-def imagery from people exploring wildernesses from
      around the world. The homepage's large mountain range is perfect for
      their background image, and their online store is well-supported
      with thorough descriptions of their different books, prints, and
      bundle options from easy-to-browse store galleries."
        img1={Mountain3}
        img2={Mountain4}
      />
    </div>
  );
};

export default Destination;
