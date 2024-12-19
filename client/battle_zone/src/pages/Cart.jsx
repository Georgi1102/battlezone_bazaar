import React, { useState, useEffect } from "react";
import NavigationBar from "../components/NavigationBar";
import Footer from "../components/Footer";
import "../style.css";

export default function Cart() {
    const [cartItems, setCartItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        // Load cart items from localStorage
        const storedItems = JSON.parse(localStorage.getItem("products"));
        setCartItems(storedItems);
    }, []);

    useEffect(() => {
        // Recalculate total price whenever cartItems change
        const total = cartItems.reduce((sum, item) => sum + item.price * item.selectedQuantity, 0);
        setTotalPrice(total);
    }, [cartItems]);

    const increaseQuantity = (productId) => {
        setCartItems((prevItems) =>
            prevItems.map((item) =>
                item.id === productId
                    ? { ...item, selectedQuantity: item.selectedQuantity + 1 }
                    : item
            )
        );
    };

    const decreaseQuantity = (productId) => {
        setCartItems((prevItems) =>
            prevItems.map((item) =>
                item.id === productId
                    ? { ...item, selectedQuantity: Math.max(1, item.selectedQuantity - 1), } : item
            )
        );
    };

    const removeItem = (productId) => {
        const products = JSON.parse(localStorage.getItem('products')) || [];
        const updatedProducts = products.filter(product => product.id !== productId);
        localStorage.setItem('products', JSON.stringify(updatedProducts));

        setCartItems((prevItems) => prevItems.filter((item) => item.id !== productId));
    };

    const proceedToCheckout = () => {
        window.location.href = "/checkout"; // Replace with your actual checkout page route
    };


    return (
        <div className="bg-gray flex flex-col min-h-screen">
            <NavigationBar></NavigationBar>
            <div className="p-3 max-w-7x1 pt-16 min-h-[90vh]">
                <header className=" text-white p-4">
                    <h1 className="text-center text-2xl">Your Shopping Cart</h1>
                </header>

                <main className="mt-8 px-4">
                    <div id="cart-page-items" className="space-y-4">
                        {cartItems.length > 0 ? (
                            cartItems.map((item) => (
                                <div
                                    key={item.id}
                                    className="flex justify-between items-center p-4 bg-white shadow rounded-lg">
                                    <div>
                                        <h2 className="text-lg font-bold">{item.name}</h2>
                                        <p>Price: ${item.price.toFixed(2)}</p>
                                        <p>Selected Quantity: {item.selectedQuantity}</p>
                                    </div>
                                    <div className="flex items-center space-x-4">
                                        <button
                                            className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                                            onClick={() => decreaseQuantity(item.id)}>-</button>
                                        <span>{item.selectedQuantity}</span>
                                        <button
                                            className="bg-green-500 text-white px-2 py-1 rounded hover:bg-green-600"
                                            onClick={() => increaseQuantity(item.id)}>+</button>
                                        <button
                                            className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
                                            onClick={() => removeItem(item.id)}> Remove Item</button>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p className="text-center text-gray-600">Your cart is empty.</p>
                        )}
                    </div>

                    <div className="mt-8 text-right">
                        <h2 className="text-lg font-bold">Total: ${totalPrice.toFixed(2)}</h2>
                        <button
                            className="mt-4 bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600"
                            onClick={proceedToCheckout}
                        >
                            Proceed to Checkout
                        </button>
                    </div>
                </main>
            </div>
            <Footer></Footer>
        </div>
    );
}
