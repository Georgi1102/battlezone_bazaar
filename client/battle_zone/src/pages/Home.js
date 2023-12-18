import React from "react";
import NavigationBar from "../components/NavigationBar";
import BestSellers from "../components/BestSellers";
import "../style.css";

export default function Home() {
  return (
    <div className="flex opacity-90 flex-col min-h-screen">
      <NavigationBar></NavigationBar>
      <div className="flex flex-col items-start ml-12 mt-8">
        <h2 className="text-5xl text-white font-semibold mb-4">Welcome!</h2>
        <p className="text-white text-left text-2xl max-w-md">
          At BattleZone, we are passionate about providing high-quality airsoft
          products for enthusiasts of all levels.
        </p>
      </div>

      <div className="mt-44">
        <BestSellers />
      </div>

      <footer className="bg-black border-t-2 border-t-red-600 text-red p-4 mt-auto">
        <div className="container mx-auto text-center">
          <p>&copy; 2023 BattleZone Shop. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
