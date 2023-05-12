import Navbar from "../components/Navbar"
import Hero from "../components/Hero";
import AboutImg from "../images/6.jpg";

function Service(){
    return(
       <>
       
       <Navbar/>
       <Hero cName="hero-mid" heroImg={AboutImg} title="Sevice" btnClass="hide" />
       </>
    )
   }
   
   export default Service