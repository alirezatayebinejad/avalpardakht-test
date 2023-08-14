import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import TodoButtons from '../components/Todo/TodoButtons';
import { showTodo } from '../services/todoApi'; // Import the showTodo function
import { UserContext } from '../contexts/userContext';
import { useQuery } from '@tanstack/react-query';

const Todo = () => {
    const { authToken } = useContext(UserContext);
    const { todoId } = useParams();
    const { status, error, data: todo } = useQuery({
        queryKey: ["posts", parseInt(todoId), authToken],
        queryFn: () => showTodo(todoId, authToken)
    })

    if (status === 'loading') {
        return <span>Loading...</span>
    }

    if (status === 'error') {
        return <span>Error: {error.message}</span>
    }

    return (
        <div>
            <div>
                <div>
                    <h1>{todo && todo?.todo}</h1>
                    <div>
                        <TodoButtons todo={todo} />
                    </div>
                </div>
                <p>
                    {todo && todo?.description}
                </p>

            </div>
        </div >
    );
};

export default Todo;
