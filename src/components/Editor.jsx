import React from "react"; 
import Nav from './Nav.jsx'
import Form from './Form.jsx'
import './NewEntry.css'

// pass in editEntry here, then pass props into form 

function Editor() {

    return (
        <>
            <Nav />
            <h1 className="editor--title">Edit Entry</h1>
            <Form 
            />
        </>
    )
}

export default Editor 