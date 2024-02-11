import React from "react";
import logo from './keeps.png'

export default function Topbar(){
    return(
        <header className="h-16 shadow-md flex justify-evenly items-center">
            <div className="h-full flex justify-center items-center gap-2">
                <img src={logo} className="h-4/6"/>
                <h1 className="font-bold text-xl text-gray-500">Keep</h1>
            </div>
        </header>
    )
}