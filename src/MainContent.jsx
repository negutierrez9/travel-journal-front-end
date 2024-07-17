import { React, useEffect, useState } from 'react'
import Card from './components/Card'
import Nav from './components/Nav'
import { getUserEntries } from './api_services/EntryService'
import './MainContent.css'
import { Link } from "react-router-dom";

export default function MainContent() {
    const [entries, setEntries] = useState([]); 

    useEffect(() => {
        const fetchEntries = async () => {
            const fetchedEntries = await getUserEntries(); 
            setEntries(fetchedEntries); 
        }

        fetchEntries(); 
    }, []);

    const dataSet = entries.data ? entries.data.map(item => {
        return <Card 
            key={item.title}
            title={item.title}
            location={item.location}
            googleMapsUrl={item.googleMapsUrl}
            startDate={item.startDate.split('T')[0]}
            endDate={item.endDate.split('T')[0]}
            description={item.description}
            imgUrl={item.imgUrl}
        />
    }) : null;

    return (
        <>
            <Nav />
            <div>
                {dataSet}
                <Link to="/editor" id="addEntry">Add New Entry</Link>
            </div>
        </>
    )
};