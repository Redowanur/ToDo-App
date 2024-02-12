import React, { useState } from "react";
import { Add } from "@material-ui/icons";

export default function CreateNote(props) {
    const [content, setContent] = useState({
        title: '',
        note: '',
    });
    const [errorMessage, setErrorMessage] = useState('');

    const InputEvent = (e) => {
        const { name, value } = e.target;

        setContent((prevData) => {
            return {
                ...prevData,
                [name]: value
            };
        });
    };

    const handleAddContent = (e) => {
        e.preventDefault();

        if (content.note !== '' && content.title !== '') {
            props.passContent(content);
            setContent({
                title: '',
                note: ''
            });
            setErrorMessage('');
        } else {
            setErrorMessage('Please add a title and note');
        }
    };

    return (
        <>
            <div className="my-10 shadow-md shadow-gray-400 rounded-xl p-4 w-100 bg-gray-50">
                <form className="flex flex-col gap-4">
                    <input 
                        type="text" 
                        name="title"
                        value={content.title}
                        onChange={InputEvent}
                        placeholder="Title" 
                        className="outline-none text-xl font-bold bg-gray-50"
                        required
                        autoComplete="off"
                    />
                    <textarea 
                        rows={4} 
                        cols={20} 
                        name="note"
                        value={content.note}
                        onChange={InputEvent}
                        placeholder="Take a note..." 
                        className="outline-none min-h-10 bg-gray-50"
                        required
                        autoComplete="off"
                    />
                    {errorMessage && (
                        <p className="text-red-500 text-sm">{errorMessage}</p>
                    )}
                    <div className='flex justify-end'>
                        <button
                            className="bg-yellow-500 w-8 h-8 rounded-full text-white"
                            onClick={handleAddContent}
                        >
                            <Add/>
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
}
