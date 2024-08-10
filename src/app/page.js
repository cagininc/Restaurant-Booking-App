import Image from "next/image";
import NavBar from "../components/NavBar";
import UserList from "../components/UserList";
import SingleUser from "../components/SingleUser";
import Main from "../components/Main.js";
import Footer from "../components/Footer.js";
import BookingForm from "../components/BookingForm";
import Script from 'next/script';
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS

export default function Home() {
  return (
    <div>
<Script
        src="https://raw.githubusercontent.com/courseraap/capstone/main/api.js"
        strategy="beforeInteractive"
      />
      <NavBar />
      
<BookingForm/>



      
    </div>
  );
}
