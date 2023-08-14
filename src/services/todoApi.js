import axios from 'axios';

const BASE_URL = 'https://interview.aval.dev/api';

async function addTodo(title, description, token) {
    try {
        const response = await axios.post(`${BASE_URL}/todo-list/add`, {
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

async function updateTodo(id, title, description, token) {
    try {
        const response = await axios.put(`${BASE_URL}/todo-list/update/${id}`, {
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
        const response = await axios.get(`${BASE_URL}/todo-list/list`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return response.data;
    } catch (error) {
        throw error;
    }
}
export { addTodo, updateTodo, getTodos };
