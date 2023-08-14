import React, { useState, useContext } from 'react';
import { addTodo } from '../../services/todoApi';
import { UserContext } from '../../contexts/userContext';
import { useMutation, useQueryClient } from '@tanstack/react-query';

const AddTodoForm = () => {
    const { authToken } = useContext(UserContext);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const queryClient = useQueryClient();
    const { status, error, mutate } = useMutation({
        mutationFn: addTodo,
        onSuccess: newTodo => {
            queryClient.setQueriesData(["todos"], newTodo.id, authToken);
        }
    });

    const handleAddTodo = async (title, description) => {
        mutate({ title, description, authToken }); // Pass the arguments correctly
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
                <button onClick={handleAddTodo} disabled={status === "loading"}>Add Todo</button>
            </div>
        </div>
    );
};

export default AddTodoForm;
