import React from "react"; 
import Nav from './Nav.jsx'
import Form from './Form.jsx'
import './NewEntry.css'

function NewEntry(props) {

    return (
        <>
            <Nav />
            <h1 className="editor--title">Add Entry</h1>
            <Form />
        </>
    )
}

export default NewEntry 