import Image from "next/image";
import NavBar from "./components/NavBar";
export default function Home() {
  return (
    <div>
      <NavBar />
      <h1>Welcome to my Restaurant Booking App..</h1>
      <p>
        Enjoy a seamless dining experience with our easy-to-use booking system.
      </p>

      <Image
        src="/restaurant-image.jpg"
        alt="Restaurant Image"
        width={500}
        height={300}
      />
    </div>
  );
}
