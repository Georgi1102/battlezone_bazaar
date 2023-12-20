import React from "react";
import { useNavigate } from "react-router-dom";

export default function NavigationBar() {
  const navigate = useNavigate();

  return (
    <header className="bg-black border-b-2  border-b-red-600 text-red p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-semibold">BattleZone Bazaar</h1>
        <div className="w-40 flex justify-between">
          <button onClick={() => navigate("/login")} className="hover:underline">LOG IN</button>
          <button onClick={() => navigate("/signUp")} className="hover:underline">SIGN UP</button>
        </div>
      </div>
    </header>
  );
}