import React, { useState, useContext } from 'react';
import { addTodo } from '../../services/todoApi';
import { UserContext } from '../../contexts/userContext';
import { useMutation, useQueryClient } from '@tanstack/react-query';

const AddTodoForm = () => {
    const { authToken } = useContext(UserContext);
    const [todo, setTodo] = useState('');
    const [description, setDescription] = useState('');
    const [alert, setAlert] = useState(null)
    const queryClient = useQueryClient();
    const { status, error, mutate } = useMutation({
        mutationFn: () => addTodo(todo, description),
        onMutate: () => {
            setAlert('');
        },
        onSuccess: () => {
            setAlert("todo added to the list");
            setTodo('')
            setDescription("")
        }
    })

    const handleAddTodo = async () => {
        mutate()
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
                {alert && <span>{alert}</span>}
            </div>
        </div>
    );
};

export default AddTodoForm;
