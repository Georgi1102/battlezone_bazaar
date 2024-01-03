// Using example product details

import React, { useState } from "react";
import NavigationBar from "../components/NavigationBar";
import Footer from "../components/Footer";
import "../style.css";
import ak47 from "../images/ak47.jpg";

export default function SingleProduct() {
    // Counter
    const [counter, setCounter] = useState(1);

    const incrementHandler = () => {
        setCounter((val) => val + 1);
    };

    const decrementHandler = () => {
        counter > 1 ? setCounter((val) => val - 1) : setCounter(1);
    };

    return (
        <div className="bg-dark-gray-solid flex flex-col min-h-screen">
            <NavigationBar></NavigationBar>
            <div className="p-3 max-w-7x1 m-auto">
                <div className="mt-6 sm:mt-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 mx-8 gap-6 h-max">
                        <div>
                            <img src={ak47} alt="" className="w-full rounded-md"/>
                        </div>

                        {/* product detail */}
                        <div className="ml-16">
                            <h1 className="font-gfsNeohellenicBold text-white text-5xl">AK47</h1>
                            <p className="mt-5 font-gfsNeohellenicRegular text-white text-3xl">350$</p>
                            <div className="mt-7 w-24 py-1 font-gfsNeohellenicRegular rounded-lg text-white text-lg text-center border border-white bg-white-transparent flex">
                                <button onClick = {decrementHandler} className="w-10">-</button>
                                <span className="w-full border-l border-r">{counter}</span>
                                <button onClick = {incrementHandler} className="w-10">+</button>
                            </div>
                            { /* quantity */ }
                            <p className="mt-10 font-gfsNeohellenicRegular text-white text-2xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                            <button className="mt-7 w-48 rounded-md text-white text-xl font-gfsNeohellenicBold bg-green py-1 mt-3 flex justify-center">Add to Cart</button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
}