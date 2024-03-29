import React from "react";

export default function Footer () {
    return (
        <footer className="bg-dark-gray text-white py-4  h-[10vh] w-full">
            <div className="container mx-auto text-center space-y-3">
                <div className="flex flex-row justify-center">
                    <p className="font-[Excluded]">BattleZone Bazaar</p>
                    <span className="star"></span>
                </div>
                <p className="text-sm">&copy; 2023 BattleZone Shop. All rights reserved.</p>
            </div>
        </footer>
    );
}