import React, { useState, useContext } from 'react';
import { updateTodo } from '../../services/todoApi'; // Update the path to match the location of your todoApi.js
import { UserContext } from '../../contexts/userContext';

const EditTodoForm = ({ todo }) => {
    const { authToken } = useContext(UserContext);
    const [title, setTitle] = useState(todo?.title);
    const [description, setDescription] = useState(todo?.description);
    const [isLoading, setIsLoading] = useState(false);

    const handleUpdateTodo = async () => {
        setIsLoading(true);
        try {
            const updatedTodo = await updateTodo(todo?.id, title, description, authToken);
            console.log('Todo updated:', updatedTodo);
        } catch (error) {
            console.error('Error updating todo:', error);
            setIsLoading(false);
        }
        setIsLoading(false);
    };

    return (
        <div>
            <div>
                <label htmlFor="title">Title:</label>
                <input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)} />
            </div>
            <div>
                <label htmlFor="description">Description:</label>
                <textarea id="description" value={description} onChange={(e) => setDescription(e.target.value)} />
            </div>
            <div>
                <button onClick={handleUpdateTodo} disabled={isLoading}>Update Todo</button>
            </div>
        </div>
    );
};

export default EditTodoForm;
