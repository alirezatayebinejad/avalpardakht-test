import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import TodoButtons from '../components/Todo/TodoButtons';
import { showTodo } from '../services/todoApi'; // Import the showTodo function
import { UserContext } from '../contexts/userContext';

const Todo = () => {
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
            <div>
                {!isLoading && todo ?
                    <>
                        <div>
                            <h1>{todo && todo?.todo}</h1>
                            <div>
                                <TodoButtons todo={todo} />
                            </div>
                        </div>
                        <p>
                            {todo && todo?.description}
                        </p>
                    </>
                    : <h2>Loading...</h2>
                }
            </div>
        </div >
    );
};

export default Todo;
