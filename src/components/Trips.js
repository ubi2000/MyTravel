import "./Trips.css";
import TripsData from "./TripsData";
import Trips1 from "../images/5.jpg";
import Trips2 from "../images/6.jpg";
import Trips3 from "../images/8.jpg";

function Trips() {
  return (
    <div className="trip">
      <h1>Recent Trips</h1>
      <p>You can discover unique Destinations using google maps</p>
      <div className="tripcard">
        <TripsData
          image={Trips1}
          heading="Trip to Gulmarg"
          text="sustainable ecology, and related creative projects, all toward the
        passions of readers who submit their own stories in addition to the
        publications of staff. The nature-driven topics they cover address a
        wide range of inspirational content, and the site's design offers
        close-up, high-def imagery from people exploring wildernesses from
        around the world."
        />
        <TripsData
          image={Trips2}
          heading="Trip to Sonmarg"
          text="sustainable ecology, and related creative projects, all toward the
        passions of readers who submit their own stories in addition to the
        publications of staff. The nature-driven topics they cover address a
        wide range of inspirational content, and the site's design offers
        close-up, high-def imagery from people exploring wildernesses from
        around the world."
        />
        <TripsData
          image={Trips3}
          heading="Trip to Gangbal"
          text="sustainable ecology, and related creative projects, all toward the
        passions of readers who submit their own stories in addition to the
        publications of staff. The nature-driven topics they cover address a
        wide range of inspirational content, and the site's design offers
        close-up, high-def imagery from people exploring wildernesses from
        around the world."
        />
      </div>
    </div>
  );
}
export default Trips;
