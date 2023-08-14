import React, { useState, useContext, useEffect } from 'react';
import { updateTodo } from '../../services/todoApi'; // Update the path to match the location of your todoApi.js
import { UserContext } from '../../contexts/userContext';
import { useParams } from 'react-router-dom';
import { showTodo } from '../../services/todoApi'; // Import the showTodo function

const EditTodoForm = () => {
    const { authToken } = useContext(UserContext);
    const { todoId } = useParams();
    const [todo, setTodo] = useState(null);
    const [title, setTitle] = useState(todo ? todo.todo : "");
    const [description, setDescription] = useState(todo ? todo.description : "");
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        const fetchTodo = async () => {
            try {
                const todoInfo = await showTodo(todoId, authToken);
                setTitle(todoInfo.todo)
                setDescription(todoInfo.description)
                setTodo(todoInfo);
            } catch (error) {
                console.error('Error fetching todo:', error);
                setIsLoading(false);
                setTodo("empty")
            }
        };
        fetchTodo();
        setIsLoading(false);
    }, [todoId, authToken]);

    const handleUpdateTodo = async () => {
        setIsLoading(true);
        try {
            await updateTodo(todo.id, title, description, authToken);

        } catch (error) {
            console.error('Error updating todo:', error);
            setIsLoading(false);
        }
        setIsLoading(false);
    };

    if (todo === "empty")
        return (< h2 > this post does not exist</ h2>)
    if (isLoading)
        return <h2>loading...</h2>
    return (
        <div>
            {todo ? <>
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
                </div></> : <h2>loading...</h2>}
        </div>
    );
};

export default EditTodoForm;
