import React from "react";
import { useNavigate } from "react-router-dom";

export default function NavigationBar() {
  const navigate = useNavigate();

  return (
    <header className="bg-dark-gray-solid opacity-90 text-white p-4 " style={{ position: "sticky", top: 0 }}>
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex flex-row justify-center">
          <h1 className="text-3xl font-[Excluded]">BattleZone Bazaar</h1>
          <span className="star"></span>
        </div>
        <div className="w-40 flex justify-between text-xl">
          <button onClick={() => navigate("/login")} className="text-hover">Log In</button>
          <button onClick={() => navigate("/signUp")} className="text-hover">Sign Up</button>
        </div>
      </div>
    </header>
  );
}