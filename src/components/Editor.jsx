import React from "react"; 
import Nav from './Nav.jsx'
import Form from './Form.jsx'

function Editor(props) {
    const addEntry = () => {
        console.log('Added Entry!')
    }

    return (
        <>
            <Nav />
            <Form />
        </>
    )
}

export default Editor 