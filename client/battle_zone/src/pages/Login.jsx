import React from "react";
import "../style.css";

export default function Login() {
    return (
        <div className="w-full h-full flex justify-center items-center">
            <div className="w-[30vw] h-[40vh] bg-black border-2 border-red-600 rounded-lg flex flex-col justify-evenly" >
                <div className="text-red text-4xl flex justify-center ">
                    Login
                </div>
                <form className="h-44 flex flex-col items-center">
                    <input className="w-[70%]" placeholder="Username..." maxLength={64} autoFocus={true}></input>
                    <input className="w-[70%]" placeholder="Password..." maxLength={64} type="password"></input>
                </form>
            </div>
        </div>
    );
}
