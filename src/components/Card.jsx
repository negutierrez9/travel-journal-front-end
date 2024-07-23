import React from 'react'
import './Card.css'
import 'https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js'
import 'https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js'


export default function Card(props) {
    const handleDeleteEntry = async () => {
        await props.onDelete(props.id)
    }

    return (
        <div className="card-container">
            <div className="photo-container">
                <img src={props.imgUrl} alt="Photo of travel location" className="card-photo" />
            </div>
            <div className="main-container">
                <div className="location">
                    <ion-icon name="location"></ion-icon>
                    <h3 id="location">{props.location}</h3>
                    <a href={props.googleMapsUrl} id="googleMapsUrl">View on Google Maps</a>
                    {/*Up next: call editEntry endpoint onto front end, change edit button to open edit menu with delete/save option */}
                    <button onClick={handleDeleteEntry} id="edit">
                        <ion-icon name="create-outline"></ion-icon>
                    </button>
                </div>
                <h1 className="title">{props.title}</h1>
                <h3 className="date">{props.startDate} {props.endDate ? `- ${props.endDate}` : ''}</h3>
                <p className="description">{props.description}</p>
            </div>
        </div>
    )
}
