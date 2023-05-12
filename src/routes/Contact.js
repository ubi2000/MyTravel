import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutImg from "../images/night.jpg";
import Footer from "../components/Footer";

function Contact() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg={AboutImg}
        title="Contact"
        btnClass="hide"
      />
      <Footer />
    </>
  );
}

export default Contact;
