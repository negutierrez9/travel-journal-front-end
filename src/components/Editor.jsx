import React, { useEffect, useState } from "react"; 
import Nav from './Nav.jsx'
import Form from './Form.jsx'
import './NewEntry.css'
import { editEntry, getEditedEntry } from "../api_services/EntryService.js";
import { useParams } from "react-router-dom";


function Editor() {
    const { id: entryId} = useParams()
    const [editedEntry, setEditedEntry] = useState([]); 

    useEffect(() => {
        if (entryId) {
            fetchEditedEntry(entryId);
        }
    }, [entryId]);

    const fetchEditedEntry = async (entryId) => {
        const { data: fetchedEditedEntry } = await getEditedEntry(entryId); 
        setEditedEntry(fetchedEditedEntry[0]); 
    }
 
    const handleEditEntry = async (entryId) => {
        await editEntry(entryId); 
    }

    return (
        <>
            <Nav />
            <h1 className="editor--title">Edit Entry</h1>
            <Form 
                key={editedEntry.id}
                id={editedEntry.id}
                currentTitle={editedEntry.title}
                currentLocation={editedEntry.location}
                currentGoogleMapsUrl={editedEntry.googleMapsUrl}
                currentStartDate={editedEntry.startDate}
                currentEndDate={editedEntry.endDate}
                currentDescription={editedEntry.description}
                currentImgUrl={editedEntry.imgUrl}
                onEdit={handleEditEntry}
            />
        </>
    )
}

export default Editor 