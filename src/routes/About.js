import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutImg from "../images/night.jpg"
function About() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero"
        heroImg={AboutImg}
        title="Your Journey Your Story"
        text="Choose Your Destination"
        buttonText="Travel Plan"
        url="/"
        btnClass="show"
      />
    </>
  );
}

export default About;
