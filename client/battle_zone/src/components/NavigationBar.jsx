import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function NavigationBar() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <header
      className="bg-dark-gray-solid opacity-90 text-white p-4 w-full" style={{ position: "fixed", top: 0, zIndex: 1000 }}>
      <div className="flex justify-between items-center">
        <div className="flex flex-row justify-center">
          <h1
            className="text-3xl font-[Excluded]"
            onClick={() => navigate("/")}
            style={{ cursor: "pointer" }}
          >
            BattleZone Bazaar
          </h1>
          <span className="star"></span>
        </div>

        <div className="relative">
          <FontAwesomeIcon
            icon="fa-solid fa-bars"
            size="2xl"
            className="cursor-pointer"
            onClick={toggleMenu}
          />
          {menuOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded-lg shadow-lg">
              <button
                className="block w-full text-left px-4 py-2 rounded-lg hover:bg-gray-200"
                onClick={() => navigate("/login")}
              >
                Log In
              </button>
              <button
                className="block w-full text-left px-4 py-2 rounded-lg hover:bg-gray-200"
                onClick={() => navigate("/signUp")}
              >
                Sign Up
              </button>
              <button
                className="block w-full text-left px-4 py-2 rounded-lg hover:bg-gray-200"
                onClick={() => navigate("/catalog")}
              >
                Catalog
              </button>
              <button
                className="block w-full text-left px-4 py-2 rounded-lg hover:bg-gray-200"
                onClick={() => navigate("/forum")}
              >
                Forum
              </button>
              <button
                className="block w-full text-left px-4 py-2 rounded-lg hover:bg-gray-200"
                onClick={() => navigate("/cart")}
              >
                Cart
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
