import Image from "next/image";
import NavBar from "../components/NavBar";
import Main from "../components/Main.js";
import Footer from "../components/Footer.js";
import BookingForm from "../components/BookingForm";
import Script from 'next/script';
import Specials from "../components/Specials.js";
import Testimonials from "../components/Testimonials.js";
import  Hero  from "../components/Hero.js";


export default 
function Home() {






  return (
    <div>
{/* <Script
        src="https://raw.githubusercontent.com/courseraap/capstone/main/api.js"
        strategy="beforeInteractive"
      /> */}
      <NavBar />
      <Hero/>
      <Specials/>
      <Testimonials/>
      
      <Main/>
      
      <Footer/>
      
      
     
      




      
    </div>
  );
}
