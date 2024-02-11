import React from "react";
import { Delete } from "@material-ui/icons";

export default function Note({ id, title, note, passDelete }) {
    return (
        <div className="w-56 rounded-xl shadow-md shadow-gray-400 bg-gray-50 p-3 flex flex-col">
            <div className="grow">
                <h1 className="text-lg font-semibold mb-2"> {title} </h1>
                <p className=""> {note} </p>
            </div>
            <div className="flex justify-end">
                <button
                    className="bg-red-400 h-8 w-8 rounded-full text-white"
                    onClick={(e)=>{
                        e.preventDefault()
                        passDelete(id)
                    }}
                >
                <Delete />
                </button>
            </div>
        </div>
    );
}
