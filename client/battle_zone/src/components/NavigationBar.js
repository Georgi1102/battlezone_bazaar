import React from "react";

export default function NavigationBar(){

    return(
        <header className="bg-orange  text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-semibold">BattleZone Bazaar</h1>
          <nav>
            <ul className="flex space-x-4">
              <li className="hover:underline">Home</li>
              <li className="hover:underline">Products</li>
              <li className="hover:underline">Contact</li>
            </ul>
          </nav>
        </div>
      </header>
    );
}