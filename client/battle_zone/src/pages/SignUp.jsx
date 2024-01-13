import React from "react";
import { useRef, useState, useEffect } from "react";
import "../style.css";
import { useNavigate } from "react-router-dom";
import NavigationBar from "../components/NavigationBar";

// Add Regex
//const USERNAME_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3, 23}$/;
//const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8, 24}$/;

export default function SignUp() {
    const navigate = useNavigate();

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log(username, email, password);
    }

    return (
        <div className="bg-special-forces w-full h-[100vh] flex justify-center items-center">
            <NavigationBar></NavigationBar>
            <div className="lg:w-[35vw] md:w-[60vw] sm:w-[45vw] py-5 bg-dark-gray rounded-lg flex flex-col justify-evenly" >
                <form className="h-50 space-y-5 flex flex-col items-center" onSubmit={handleSubmit}>
                    <h1 className="text-white tracking-wider font-gfsNeohellenicBold text-5xl flex justify-center ">
                        Create Account
                    </h1>
                    <input
                        className="w-[70%] rounded-md py-1.5 px-2 bg-white-transparent text-white"
                        placeholder="Username"
                        maxLength={64}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                        autoComplete="off">
                    </input>
                    <input className="w-[70%] rounded-md py-1.5 px-2 bg-white-transparent text-white"
                        placeholder="Email"
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        maxLength={64}>
                    </input>
                    <input
                        className="w-[70%] rounded-md py-1.5 px-2 bg-white-transparent text-white"
                        placeholder="Password"
                        maxLength={64}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        type="password">
                    </input>
                    <button className=" w-[35%] rounded-md text-white text-xl font-gfsNeohellenicBold bg-green py-1 flex justify-center">
                        Sign up
                    </button>
                    <div className=" flex flex-row space-x-1">
                        <div className="text-white">
                            Already have an account?
                        </div>
                        <button onClick={() => navigate("/login")} className="text-lime-500">Login</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
