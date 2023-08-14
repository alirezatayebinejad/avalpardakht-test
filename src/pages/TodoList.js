import React, { useContext } from 'react';
import TodoCard from '../components/Todo/TodoCard';
import { Link } from 'react-router-dom';
import { getTodos } from '../services/todoApi';
import { UserContext } from '../contexts/userContext';
import { useQuery } from '@tanstack/react-query';
import styles from './TodoList.module.css';

function TodoList() {
    const { authToken } = useContext(UserContext);
    const {
        status,
        error,
        data: todos
    } = useQuery({
        queryKey: ["todos", authToken],
        queryFn: () => getTodos(authToken),
    });

    const renderTodos = () => {
        return todos?.map(todo => (
            <TodoCard key={todo.id} todo={todo} />
        ));
    }

    return (
        <div className={styles.todo_list_container}>
            <div className={styles.todo_list_header}>
                <h2>Todo List</h2>
                <Link to="/add"><button className={styles.add_button}>Add New</button></Link>
            </div>
            <div className={styles.todo_list_items}>
                {status === 'loading' ? <span className={styles.loading}>Loading...</span> : null}
                {status === 'error' ? <span className={styles.error}>Error: {error.message}</span> : null}
                {status === 'success' && renderTodos()}
            </div>
        </div>
    );
}

export default TodoList;
