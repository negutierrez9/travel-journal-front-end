import { React, useEffect, useState } from 'react'
import Card from './components/Card'
import Nav from './components/Nav'
import { getUserEntries, deleteEntry, editEntry } from './api_services/EntryService'
import './MainContent.css'
import { Link } from "react-router-dom";

export default function MainContent() {
    const [entries, setEntries] = useState([]); 
    const [editEntryId, setEditEntryId] = useState(null)

    useEffect(() => {
        fetchEntries(); 
    }, []);

    const fetchEntries = async () => {
        const fetchedEntries = await getUserEntries(); 
        console.log(fetchedEntries)
        setEntries(fetchedEntries); 
    }

    const fetchEditEntry = async () => {
        
    }

    const handleDeleteEntry = async (entryId) => {
        await deleteEntry(entryId); 

        fetchEntries(); 
    }

    const handleEditEntry = async (entryId) => {
        setEditEntryId(entryId); 
        await editEntry(entryId); 

        fetchEntries(); 
    }

    const dataSet = entries.data ? entries.data.map(item => {
        return <Card 
            key={item.id}
            id={item.id}
            title={item.title}
            location={item.location}
            googleMapsUrl={item.googleMapsUrl}
            startDate={item.startDate.split('T')[0]}
            endDate={item.endDate.split('T')[0]}
            description={item.description}
            imgUrl={item.imgUrl}
            onDelete={handleDeleteEntry}
            onEdit={handleEditEntry}
        />
    }) : null;

    return (
        <>
            <Nav />
            <div>
                {dataSet}
                <Link to="/addEntry" id="addEntry">Add New Entry</Link>
            </div>
        </>
    )
};