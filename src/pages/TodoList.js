import React, { useContext } from 'react';
import TodoCard from '../components/Todo/TodoCard';
import { Link } from 'react-router-dom';
import { getTodos } from '../services/todoApi'; // Import the API function
import { UserContext } from '../contexts/userContext';
import { useQuery } from '@tanstack/react-query';

function TodoList() {
    const { authToken } = useContext(UserContext);
    const {
        status,
        error,
        data: todos
    } = useQuery({
        queryKey: ["todos", authToken],
        queryFn: () => getTodos(authToken),
    })

    const renderTodos = () => {
        let todoList = [];
        todoList = todos?.map(todo => (
            <TodoCard key={todo.id} todo={todo} />
        ))
        return todoList;
    }

    if (status === 'loading') {
        return <span>Loading...</span>
    }

    if (status === 'error') {
        return <span>Error: {error.message}</span>
    }
    return (
        <div>
            <div>
                <h2>Todo List</h2>
                <Link to="/add"><button>Add New</button></Link>
            </div>
            <div>
                {renderTodos()}
            </div>
        </div>
    );
}

export default TodoList;
