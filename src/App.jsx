import React, { useState } from "react";
import ListItem from "./ListItem";

export default function App(){
  const [item, addItem] = useState('')
  const [itemList, updateItemList] = useState([])

  const addItems = (e) =>{
    addItem(e.target.value)
  }

  const addButton = ()=>{
    updateItemList((oldList)=>{
      return [...oldList, item]
    })
    addItem('')
  }

  const deleteItem =(id)=>{
    updateItemList((oldList)=>{
      return oldList.filter((arrEl, i)=> i !== id)
    })
  }

  return(
    <>
      <div className="flex justify-center items-center h-screen bg-cyan-500">
        <div className="bg-neutral-100 w-96 h-100 rounded-3xl shadow-2xl">
          <div className="text-center">
            <h1 className="bg-purple-600 mt-7 py-2 font-bold text-5xl text-neutral-100">ToDo List</h1>
          </div>
            <input 
              type="text"
              placeholder="Add a Item"
              onChange={addItems}
              value={item}
              className="font-bold text-2xl py-1 mb-3 border-b-4 border-purple-600 bg-neutral-100 text-center w-72 mx-4 outline-none"
            />

            <button onClick={addButton} className="font-bold text-xl bg-purple-600 h-10 mt-4 w-10 rounded-full hover:bg-green-500 shadow-lg"><i class="fa-solid fa-plus"></i></button>

          <ul>
            {
              itemList.map((i, idx)=>{
                return <ListItem 
                  key={idx}
                  itm={i}
                  id={idx}
                  onclick={deleteItem}
                  />
              })
            }
          </ul>
        </div>
      </div>
    </>
  )
}