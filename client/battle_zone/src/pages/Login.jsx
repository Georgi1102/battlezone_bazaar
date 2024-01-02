import React from "react";
import "../style.css";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const navigate = useNavigate();

    return (
        <div className="w-full h-full flex justify-center items-center">
            <div className="w-[30vw] h-[40vh] bg-dark-gray rounded-lg flex flex-col justify-evenly" >
                <h1 className="text-white tracking-wider font-gfsNeohellenicBold text-5xl flex justify-center ">
                    Login
                </h1>
                <form className="h-50 space-y-5 flex flex-col items-center">
                    <input className="w-[70%] rounded-md py-1.5 bg-white-transparent text-white" placeholder="Username" maxLength={64} autoFocus={true}></input>
                    <input className="w-[70%] rounded-md py-1.5 bg-white-transparent text-white" placeholder="Password" maxLength={64} type="password"></input>
                </form>   
                <div className="flex flex-col items-center">
                    <button className=" w-[35%] rounded-md text-white text-xl font-gfsNeohellenicBold bg-green py-1 mt-3 flex justify-center">
                        Log in
                    </button>
                    <div className="mt-3 flex flex-row space-x-1">
                        <div className="text-white">
                            New here?
                        </div>
                        <button onClick={() => navigate("/signUp")} className="text-lime-500">Create an account</button>
                    </div>
                </div>             
            </div>
        </div>
    );
}
