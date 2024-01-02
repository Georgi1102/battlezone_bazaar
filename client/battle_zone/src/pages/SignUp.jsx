import React from "react";
import "../style.css";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
    const navigate = useNavigate();

    return (
        <div className="w-full h-full flex justify-center items-center">
            <div className="w-[30vw] h-[65vh] bg-dark-gray rounded-lg flex flex-col justify-evenly" >
                <h1 className="text-white tracking-wider font-gfsNeohellenicBold text-5xl flex justify-center ">
                    Create Account
                </h1>
                <form className="h-50 space-y-5 flex flex-col items-center">
                    <input className="w-[70%] rounded-md py-1.5 px-2 bg-white-transparent text-white" placeholder="First name" maxLength={64} autoFocus={true}></input>
                    <input className="w-[70%] rounded-md py-1.5 px-2 bg-white-transparent text-white" placeholder="Last name" maxLength={64} autoFocus={true}></input>
                    <input className="w-[70%] rounded-md py-1.5 px-2 bg-white-transparent text-white" placeholder="Username" maxLength={64} autoFocus={true}></input>
                    <input className="w-[70%] rounded-md py-1.5 px-2 bg-white-transparent text-white" placeholder="Email" maxLength={64} autoFocus={true}></input>
                    <input className="w-[70%] rounded-md py-1.5 px-2 bg-white-transparent text-white" placeholder="Password" maxLength={64} type="password"></input>
                </form>   
                <div className="flex flex-col items-center">
                    <button className=" w-[35%] rounded-md text-white text-xl font-gfsNeohellenicBold bg-green py-1 mt-3 flex justify-center">
                        Sign up
                    </button>
                    <div className="mt-3 flex flex-row space-x-1">
                        <div className="text-white">
                            Already have an account?
                        </div>
                        <button onClick={() => navigate("/login")} className="text-lime-500">Login</button>
                    </div>
                </div>            
            </div>
        </div>
    );
}
