import axios from 'axios';

const BASE_URL = 'https://interview.aval.dev/api';

async function addTodo(title, description, token) {
    try {
        const response = await axios.post(`${BASE_URL}/todo-list/add`, {
            title,
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

export { addTodo };
