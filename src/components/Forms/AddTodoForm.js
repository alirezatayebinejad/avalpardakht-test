import React, { useState, useContext } from 'react';
import { addTodo } from '../../services/todoApi';
import { UserContext } from '../../contexts/userContext';

const AddTodoForm = () => {
    const { authToken } = useContext(UserContext);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    console.log(authToken);
    const handleAddTodo = async () => {
        try {
            console.log('getToken', authToken);
            const newTodo = await addTodo(title, description, authToken);
            console.log('New Todo:', newTodo);

            setTitle('');
            setDescription('');
        } catch (error) {
            console.error('Error adding todo:', error);
        }
    };

    return (
        <div>
            <div>
                <label htmlFor="title">Title:</label>
                <input
                    type="text"
                    id="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="description">Description:</label>
                <textarea
                    id="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
            </div>
            <div>
                <button onClick={handleAddTodo}>Add Todo</button>
            </div>
        </div>
    );
};

export default AddTodoForm;
