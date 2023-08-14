import React, { useState, useContext, useEffect } from 'react';
import EditTodoForm from '../components/Forms/EditTodoForm';
import { useParams } from 'react-router-dom';
import { showTodo } from '../services/todoApi'; // Import the showTodo function
import { UserContext } from '../contexts/userContext';

const EditTodo = () => {
    const { authToken } = useContext(UserContext);
    const { todoId } = useParams();
    const [todo, setTodo] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        const fetchTodo = async () => {
            try {
                const todoInfo = await showTodo(todoId, authToken);
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

    if (todo === "empty")
        return (< h2 > this post does not exist</ h2>)

    return (
        <div>
            <h1>Edit Todo</h1>
            {isLoading ? <p>loading...</p> : <EditTodoForm todo={todo} />}
        </div>
    );
};

export default EditTodo;
