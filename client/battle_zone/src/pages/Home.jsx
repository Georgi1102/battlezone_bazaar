import React from "react";
import NavigationBar from "../components/NavigationBar";
import BestSellers from "../components/BestSellers";
import "../style.css";
import ak47 from "../images/ak47.jpg";
import m4a1 from "../images/m4a1.jpg";
import sniper from "../images/sniper.png";
import Carousel from "../components/Carousel";
import Footer from "../components/Footer";

export default function Home() {
  const slides = [
    <img src={ak47} alt='Slide 1' />,
    <img src={m4a1} alt='Slide 2' />,
    <img src={sniper} alt='Slide 3' />
  ];
  return (
    <div className="flex flex-col min-h-screen">
      <div className="img_container h-[80vh]">
        <NavigationBar></NavigationBar>
        <div className="flex flex-col items-start ml-12 mt-8 ">
          <h2 className="text-5xl text-white font-semibold mb-8">Welcome!</h2>
          <p className="text-white text-left text-2xl max-w-md">
            At BattleZone, we are passionate about providing high-quality airsoft
            products for enthusiasts of all levels.
          </p>
        </div>
      </div>

      <div>
        <Carousel slides={slides}></Carousel>
      </div>

      <BestSellers />
      <Footer />

    </div>
  );
}
