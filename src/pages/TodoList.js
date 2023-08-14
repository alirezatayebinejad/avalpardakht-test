import React, { useState, useEffect } from 'react';
import TodoCard from '../components/Todo/TodoCard';
import { Link } from 'react-router-dom';
import { getTodos } from '../services/todoApi'; // Import the API function

function TodoList() {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        const fetchTodos = async () => {
            try {
                const fetchedTodos = await getTodos();
                setTodos(fetchedTodos);
            } catch (error) {
                console.error('Error fetching todos:', error);
            }
        };

        fetchTodos();
    }, []);
    const renderTodos = () => {
        const todoList = todos?.map(todo => (
            <TodoCard key={todo.id} todo={todo} />
        ))
        return todoList;
    }

    return (
        <div>
            <div>
                <h2>Todo List</h2>
                <Link to="/add"><button>Add New</button></Link>
            </div>
            <div>
                {todos ? renderTodos() : "loading..."}
            </div>
        </div>
    );
}

export default TodoList;
