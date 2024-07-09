import { API_URL } from '../../environment.js'

export const register = async (body)=> {
    const response = await fetch(`${API_URL}/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }, 
        body: JSON.stringify(body)
    });

    const data = await response.json(); 
    return data; 
}

export const login = async (body)=> {
    const response = await fetch(`${API_URL}/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }, 
        body: JSON.stringify(body)
    });

    const data = await response.json(); 
    return data; 
}