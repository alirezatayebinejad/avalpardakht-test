import axios from 'axios';
import { getAuthToken } from "../services/auth";

const userToken = getAuthToken();
const BASE_URL = 'https://interview.aval.dev/api/todo-list';

async function addTodo(todo, description) {
    try {
        const response = await axios.post(`${BASE_URL}/add`, {
            todo,
            description,
        }, {
            headers: {
                Authorization: `Bearer ${userToken}`,
            },
        });

        return response.data;
    } catch (error) {
        throw error;
    }
}

async function updateTodo(id, title, description, token) {
    try {
        const response = await axios.put(`${BASE_URL}/update/${id}`, {
            todo: title,
            description,
        }, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        return response.data;
    } catch (error) {
        throw error;
    }
}
async function getTodos(token) {
    try {
        const response = await axios.get(`${BASE_URL}/list`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return response.data;
    } catch (error) {
        throw error;
    }
}
async function showTodo(todoId, token) {
    try {
        const response = await axios.get(`${BASE_URL}/show/${todoId}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return response.data;
    } catch (error) {
        throw error;
    }
}

async function updateDoneStatus(todoId, done, token) {
    try {
        const response = await axios.patch(`${BASE_URL}/todo-list/change-done/${todoId}`, { done }, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return response.data;
    } catch (error) {
        throw error;
    }
}
export { addTodo, updateTodo, getTodos, showTodo, updateDoneStatus };
