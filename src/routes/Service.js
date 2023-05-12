import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutImg from "../images/6.jpg";
import Footer from "../components/Footer";
import Trips from "../components/Trips";

function Service() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg={AboutImg}
        title="Sevice"
        btnClass="hide"
      />
      <Trips/>
      <Footer />
    </>
  );
}

export default Service;
