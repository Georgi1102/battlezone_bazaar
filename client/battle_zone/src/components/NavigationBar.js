import React from "react";

export default function NavigationBar(){

    return(
        <header className="bg-black border-b-2  border-b-red-600 text-red p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-semibold">BattleZone Bazaar</h1>
          <nav>
            <ul className="flex space-x-4">
              <li className="hover:underline">SIGN UP</li>
              <li className="hover:underline">LOG IN</li>
            </ul>
          </nav>
        </div>
      </header>
    );
}