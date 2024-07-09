import React from 'react'
import data from './data'
import Card from './components/Card'
import Nav from './components/Nav'
import './MainContent.css'

export default function MainContent() {
    const dataSet = data.map(item => {
        return <Card 
            key={item.title}
            title={item.title}
            location={item.location}
            googleMapsUrl={item.googleMapsUrl}
            startDate={item.startDate}
            endDate={item.endDate}
            description={item.description}
            imgUrl={item.imgUrl}
        />
    })

    return (
        <>
            <Nav />
            <div>
                {dataSet}
                <button id="addEntry">Add New Entry</button>
            </div>
        </>
    )
}