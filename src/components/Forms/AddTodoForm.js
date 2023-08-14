import React, { useState, useContext } from 'react';
import { addTodo } from '../../services/todoApi';
import { UserContext } from '../../contexts/userContext';
import { useMutation, useQueryClient } from '@tanstack/react-query';

const AddTodoForm = () => {
    const { authToken } = useContext(UserContext);
    const [todo, setTodo] = useState('');
    const [description, setDescription] = useState('');
    const queryClient = useQueryClient();
    const { status, error, mutate } = useMutation({
        mutationFn: addTodo,
        onSuccess: newTodo => {
            queryClient.setQueriesData(["todos"], parseInt(newTodo.id), authToken)
        }
    })

    const handleAddTodo = async () => {
        mutate({ todo, description })
    };

    return (
        <div>
            <div>
                <label htmlFor="title">Title:</label>
                <input
                    type="text"
                    id="title"
                    value={todo}
                    onChange={(e) => setTodo(e.target.value)}
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
