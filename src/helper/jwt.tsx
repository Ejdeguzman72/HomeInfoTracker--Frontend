import React from 'react';

export const getJwt = () => {
    let token = localStorage.getItem('EJ-token');
    return token;
}