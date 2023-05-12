import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutImg from "../images/6.jpg";
import Footer from "../components/Footer";

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
      <Footer />
    </>
  );
}

export default Service;
