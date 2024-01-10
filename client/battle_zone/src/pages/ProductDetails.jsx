import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from 'react-router-dom';
import NavigationBar from "../components/NavigationBar";
import Footer from "../components/Footer";
import "../style.css";

export default function SingleProduct() {
    // Counter
    const [counter, setCounter] = useState(1);
    const [product, setProducts] = useState([]);

    const location = useLocation();
    const navigate = useNavigate();

    const fetchData = async () => {
        const productId = location.pathname.split("/").pop();
        const response =  await fetch(`/products/${productId}`);
        const data = await response.json();
        return data;
    }

    useEffect(() => {
        fetchData().then((data) => {
            console.log(data);
            setProducts(data)
        })
    }, [])

    const incrementHandler = () => {
        setCounter((val) => val + 1);
    };

    const decrementHandler = () => {
        counter > 1 ? setCounter((val) => val - 1) : setCounter(1);
    };

    return (
        <div className="bg-gray flex flex-col min-h-screen">
            <NavigationBar></NavigationBar>
            <div className="p-3 max-w-7x1 m-auto">
                <div className="mt-6 sm:mt-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 mx-8 gap-6 h-max">
                        <div>
                            <img src={product.imageUrl} alt="" className="w-full rounded-md"/>
                        </div>
                        {/* product details */}
                        <div className="ml-16">
                            <h1 className="font-gfsNeohellenicBold text-white text-5xl">{product.name}</h1>
                            <p className="mt-5 font-gfsNeohellenicRegular text-white text-3xl">{product.price}$</p>
                            <div className="mt-7 w-24 py-1 font-gfsNeohellenicRegular rounded-lg text-white text-lg text-center border border-white bg-white-transparent flex">
                                <button onClick = {decrementHandler} className="w-10">-</button>
                                <span className="w-full border-l border-r">{counter}</span>
                                <button onClick = {incrementHandler} className="w-10">+</button>
                            </div>
                            <p className="mt-10 font-gfsNeohellenicRegular text-white text-2xl">{product.description}</p>
                            <button className="mt-7 w-48 rounded-md text-white text-xl font-gfsNeohellenicBold bg-green py-1 mt-3 flex justify-center">Add to Cart</button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
}