import React from "react"; 
import Nav from './Nav.jsx'
import Form from './Form.jsx'
import './Editor.css'

function Editor(props) {
    const addEntry = () => {
        console.log('Added Entry!')
    }

    return (
        <>
            <Nav />
            <h1 className="editor--title">Add Entry</h1>
            <Form />
        </>
    )
}

export default Editor 