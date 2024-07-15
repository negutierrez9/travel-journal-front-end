import { API_URL } from '../../environment.js'; 
import { getJwt } from './JwtServices.js';

export const addEntry = async (body) => {
    const response = await fetch(`${API_URL}/addEntry`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${getJwt()}`
        }, 
        body: JSON.stringify(body)
    });

    const data = await response.json(); 

    return data; 
}

// next: test if addEntry function works on Editor or Form front end