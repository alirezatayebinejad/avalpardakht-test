import React, { useState, useContext } from 'react';
import { addTodo } from '../../services/todoApi';
import { UserContext } from '../../contexts/userContext';

const AddTodoForm = () => {
    const { authToken } = useContext(UserContext);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleAddTodo = async () => {
        setIsLoading(true);
        try {
            console.log('getToken', authToken);
            const newTodo = await addTodo(title, description, authToken);
            console.log('New Todo:', newTodo);

            setTitle('');
            setDescription('');
        } catch (error) {
            console.error('Error adding todo:', error);
            setIsLoading(false);
        }
        setIsLoading(false);
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
                <button onClick={handleAddTodo} disabled={isLoading}>Add Todo</button>
            </div>
        </div>
    );
};

export default AddTodoForm;
