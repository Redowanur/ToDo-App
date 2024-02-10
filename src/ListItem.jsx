import React from "react";

export default function ListItem(props){
    return <li className="mx-4 my-1 font-semibold text-purple-600 text-xl flex"><i class="fa-solid fa-circle-xmark text-purple-600 mr-3 hover:text-red-500 text-2xl" onClick={()=>{
        props.onclick(props.id)
    }}></i> {props.itm} </li>
}