const jwtKey = 'travel-journal-jwt'; 

export const setJwt = (jwt) => {
    localStorage.setItem(jwtKey, jwt); 
    console.log('jwt', jwt); 
}; 

export const getJwt = () => {
    const jwt = localStorage.getItem(jwtKey);

    return jwt;
};

export const removeJwt = () => {
    localStorage.removeItem(jwtKey); 
}; 