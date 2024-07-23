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
    console.log('data', data)
    return data; 
}

export const getUserEntries = async () => {
    const response = await fetch(`${API_URL}/home`, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${getJwt()}`
        } 
    });

    const data = await response.json(); 

    return data; 
}

export const deleteEntry = async (entryId) => {
    const response = await fetch(`${API_URL}/home/${entryId}`, {
        method: 'DELETE',
        headers: {
            Authorization: `Bearer ${getJwt()}`
        } 
    });

    const data = await response.json(); 

    return data; 
}

export const editEntry = async (entryId) => {
    const response = await fetch(`${API_URL}/home/${entryId}`, {
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
