import React from "react";
import { useState } from "react";
import "../style.css";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const navigate = useNavigate();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log(username, password);
    }

    return (
        <div className="bg-special-forces w-full h-[100vh] flex justify-center items-center">
            <div className="lg:w-[35vw] md:w-[60vw] sm:w-[45vw] py-5 bg-dark-gray rounded-lg flex flex-col justify-evenly" >
                <form className="h-50 space-y-5 flex flex-col items-center" onSubmit={handleSubmit}>
                    <h1 className="text-white tracking-wider font-gfsNeohellenicBold text-5xl flex justify-center ">
                        Login
                    </h1>
                    <input className="w-[70%] rounded-md py-1.5 bg-white-transparent text-white" 
                        placeholder="Username" 
                        maxLength={64} 
                        required
                        onChange={(e) => setUsername(e.target.value)}
                        autoFocus={true}>
                    </input>
                    <input className="w-[70%] rounded-md py-1.5 bg-white-transparent text-white" 
                        placeholder="Password" 
                        maxLength={64} 
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        type="password">
                    </input>
                    <button className=" w-[35%] rounded-md text-white text-xl font-gfsNeohellenicBold bg-green py-1 mt-3 flex justify-center">
                        Log in
                    </button>
                    <div className="mt-3 flex flex-row space-x-1">
                        <div className="text-white">
                            New here?
                        </div>
                        <button onClick={() => navigate("/signUp")} className="text-lime-500">Create an account</button>
                    </div>
                </form>              
            </div>
        </div>
    );
}
