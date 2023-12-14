import React from "react";
import NavigationBar from "../components/NavigationBar";
import BestSellers from "../components/BestSellers";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-camo-tan">
      <NavigationBar></NavigationBar>
      <div className=" bg-camo-green pt-5 mb-8 text-center">
        <h2 className="text-5xl text-white font-semibold">Welcome to BattleZone Bazaar</h2>
        <p className="text-white text-2xl m-14 mb-10">
          At BattleZone, we are passionate about providing high-quality
          airsoft products for enthusiasts of all levels. Whether you're a
          seasoned player or just starting, we have the gear you need to elevate
          your airsoft experience.
        </p>
      </div>
      <BestSellers></BestSellers>
      <footer className="bg-orange text-white p-4 mt-auto">
        <div className="container mx-auto text-center">
          <p>&copy; 2023 Airsoft Shop. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}