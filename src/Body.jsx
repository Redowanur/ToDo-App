import React, { useState } from "react";
import CreateNote from "./CreateNote";
import Note from "./Note";

export default function Body() {
    const [items, addItem] = useState([]);

    const addContent = (content) => {
        addItem((prev) => {
            return [...prev, content];
        });
    };

    return (
        <>
            <div className="flex justify-center items-center">
                <CreateNote passContent={addContent} />
            </div>
            <div className="flex justify-center items-center mt-6 mb-20">
                <div className="grid grid-cols-4 gap-12">
                    {items.map((val, index) => (
                        <Note
                            key={index}
                            id={index}
                            {...val}
                            passDelete={(idx)=>{
                                addItem((old)=> old.filter((curVal, i)=> idx !== i))
                            }}
                        />
                    ))}
                </div>
            </div>
        </>
    );
}
