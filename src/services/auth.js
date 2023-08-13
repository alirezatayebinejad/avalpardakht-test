import axios from 'axios';

const BASE_URL = 'https://interview.aval.dev/api';

async function login(email, password) {
    try {
        const response = await axios.post(`${BASE_URL}/login`, {
            email,
            password
        });

        const data = response.data;

        if (response.status === 200) {
            const token = data.token;
            const user = data.user;

            setAuthData(token, user);
            return token;
        } else {
            throw new Error(data.error);
        }
    } catch (error) {
        throw error;
    }
}

function setAuthData(token, user) {
    const expirationDays = 7;
    const expirationDate = new Date();
    expirationDate.setDate(expirationDate.getDate() + expirationDays);

    document.cookie = `authToken=${token}; expires=${expirationDate.toUTCString()}; path=/`;
    document.cookie = `userData=${JSON.stringify(user)}; expires=${expirationDate.toUTCString()}; path=/`;
}

function getAuthToken() {
    const cookies = document.cookie.split('; ');
    for (const cookie of cookies) {
        const [name, value] = cookie.split('=');
        if (name === 'authToken') {
            return value;
        }
    }
    return null;
}

function getUserData() {
    const cookies = document.cookie.split('; ');
    for (const cookie of cookies) {
        const [name, value] = cookie.split('=');
        if (name === 'userData') {
            return JSON.parse(value);
        }
    }
    return null;
}

function isLoggedIn() {
    const token = getAuthToken();
    return !!token;
}

function logout() {
    const expirationDate = new Date();
    expirationDate.setDate(expirationDate.getDate() - 1);
    document.cookie = `authToken=;expires=${expirationDate.toUTCString()};path=/;`;
    document.cookie = `userData=;expires=${expirationDate.toUTCString()};path=/;`;
}

export { login, isLoggedIn, logout, getUserData, getAuthToken };
