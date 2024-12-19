import React, { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';
import NavigationBar from "../components/NavigationBar";
import Footer from "../components/Footer";
import "../style.css";

import { products } from "../data/ProductData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Catalog() {
    const [quantities, setQuantities] = useState({});
    const [filter, setFilter] = useState("all");
    const [hoveredProduct, setHoveredProduct] = useState(null);

    const filteredProducts = filter === "all"
        ? products
        : products.filter(product => product.type === filter);

    useEffect(() => {
        const initialQuantities = {};
        products.forEach(product => {
            initialQuantities[product.id] = 1;
        });
        setQuantities(initialQuantities);
    }, []);

    function addToCart(element) {
        const quantity = quantities[element.id];
        const productWithQuantity = { ...element, selectedQuantity: quantity };

        if (!localStorage.getItem('products')) {
            localStorage.setItem('products', JSON.stringify([productWithQuantity]));
        } else {
            let products = JSON.parse(localStorage.getItem('products'));
            if (products.find(product => product.id === element.id)) {
                const updatedProducts = products.map(product => 
                    product.id === element.id
                        ? { ...product, selectedQuantity: productWithQuantity.selectedQuantity } 
                        : product 
                );
                localStorage.setItem('products', JSON.stringify(updatedProducts));
                return;
            }
            products.push(productWithQuantity);
            localStorage.setItem('products', JSON.stringify(products));
        }
    }

    function increaseQuantity(productId) {
        setQuantities(prevQuantities => ({
            ...prevQuantities,
            [productId]: prevQuantities[productId] + 1
        }));
    }

    function decreaseQuantity(productId) {
        setQuantities(prevQuantities => ({
            ...prevQuantities,
            [productId]: Math.max(1, prevQuantities[productId] - 1)
        }));
    }

    function handleFilterChange(event) {
        setFilter(event.target.value);
    }

    const getTooltipPosition = () => {
        if (!hoveredProduct) return { left: "105%" }; 

        const productElement = document.getElementById(`product-${hoveredProduct.id}`);
        if (productElement) {
            const productRect = productElement.getBoundingClientRect();
            const viewportWidth = window.innerWidth;

            if (productRect.right + 200 > viewportWidth) {
                return { left: `calc(100% - 615px)` }; 
            }
        }
        return { left: "105%" }; 
    };

    return (
        <div className="bg-gray flex flex-col min-h-screen">
            <NavigationBar></NavigationBar>
            <div className="p-3 max-w-7x1 pt-16 flex flex-col items-center justify-evenly min-h-[90vh]">
                <h1 className="text-white text-3xl font-bold">Catalog</h1>
                <div className="mb-4">
                    <label className="text-white">Filter by Type: </label>
                    <select value={filter} onChange={handleFilterChange} className="p-2 rounded">
                        <option value="all">All</option>
                        <option value="automatic_rifle">Rifle</option>
                        <option value="bolt_action_rifle">Sniper</option>
                        <option value="shotgun">Shotgun</option>
                    </select>
                </div>
                <div className="grid grid-cols-3 w-full">
                    {filteredProducts.map(element => (
                        <div
                            key={element.id}
                            id={`product-${element.id}`}
                            className="flex justify-center bg- m-auto border-gray-600 border-2 rounded-xl my-4 relative"
                        >
                            <div>
                                <div className="bg-[#615e3c] rounded-t-lg pl-3">{element.name}</div>
                                <img
                                    src={element.imgSrc}
                                    className="bg-[#D4D4D4]"
                                    style={{ maxWidth: "400px" }}
                                    alt={element.name}
                                    onMouseEnter={() => setHoveredProduct(element)}
                                    onMouseLeave={() => setHoveredProduct(null)}
                                />
                                <hr className="border-gray-600 border-1"></hr>
                                <div className="flex flex-row justify-between items-center bg-[#D4D4D4] rounded-b-lg">
                                    <div className="p-2">
                                        <p>Price: {element.price}</p>
                                        <p>Available: {element.quantity}</p>

                                        <div className="flex items-center space-x-2">
                                            <button
                                                className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                                                onClick={() => decreaseQuantity(element.id)}>-
                                            </button>
                                            <span>{quantities[element.id]}</span>   
                                            <button
                                                className="bg-green-500 text-white px-2 py-1 rounded hover:bg-green-600"
                                                onClick={() => increaseQuantity(element.id)}>+
                                            </button>
                                        </div>
                                    </div>
                                    <FontAwesomeIcon
                                        icon="fa-solid fa-cart-shopping"
                                        size="2xl"
                                        className="p-2 cursor-pointer"
                                        onClick={() => addToCart(element)}
                                    />
                                </div>
                            </div>

                            {hoveredProduct?.id === element.id && (
                                <div
                                    className="absolute bg-white shadow-md rounded p-3"
                                    style={{
                                        top: "50%",
                                        ...getTooltipPosition(), // Dynamically calculate the position
                                        zIndex: 10,
                                        width: "200px",
                                        transform: "translateY(-50%)",
                                    }}
                                >
                                    <h2 className="text-lg font-bold">{hoveredProduct.name}</h2>
                                    <p>{hoveredProduct.description}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
}
