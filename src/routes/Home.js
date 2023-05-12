import Destination from "../components/Destination";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import HomeImg from "../images/12.jpg"

function Home() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero"
        heroImg={HomeImg}
        title="Your Journey Your Story"
        text="Choose Your Destination"
        buttonText="Travel Plan"
        url="/"
        btnClass="show"
      />
      <Destination/>
    </>
  );
}

export default Home;
