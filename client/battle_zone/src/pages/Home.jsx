import React from "react";
import NavigationBar from "../components/NavigationBar";
import BestSellers from "../components/BestSellers";
import "../style.css";
import ak47 from "../images/ak47.jpg";
import m4a1 from "../images/m4a1.jpg";
import sniper from "../images/sniper.png";
import pfp from "../images/pfp.jpg";
import Carousel from "../components/Carousel";
import Footer from "../components/Footer";

export default function Home() {
  const slides = [
    <img src={ak47} alt='Slide 1' style={{ width: "600px", height: "400px" }} />,
    <img src={m4a1} alt='Slide 2' style={{ width: "600px", height: "400px" }} />,
    <img src={sniper} alt='Slide 3' style={{ width: "600px", height: "400px" }} />
  ];

  const ForumCard = ({ name, description }) => (
    <div className="text-white bg-dark-gray-solid w-[30vw] h-[20vh] flex flex-col rounded-3xl p-3">
      <div className="flex flex-row p-3">
        <img src={pfp} className="w-16 h-16 rounded-full mr-4"></img>
        <span>{name}</span>
      </div>
      <span>{description}</span>
    </div>
  );
  return (
    <div className="flex flex-col min-h-screen">
      <NavigationBar></NavigationBar>
      <div className="img_container h-[90vh]">
        <div className="flex flex-col items-start ml-12 mt-24 ">
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
      <div className="bg-forum-img h-[70vh] flex flex-col justify-evenly">
        <span className="text-white text-3xl font-bold">Popular Products</span>
        <BestSellers />
        <span className="text-white text-3xl font-bold">Forum</span>
        <div className="flex flex-row justify-evenly">
          <ForumCard name="Alec" description="Description"></ForumCard>
          <ForumCard name="Alec" description="Description"></ForumCard>
          <ForumCard name="Alec" description="Description"></ForumCard>
        </div>
      </div>

      <Footer />
    </div>
  );
}
