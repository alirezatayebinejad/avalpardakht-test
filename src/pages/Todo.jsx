import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import TodoButtons from '../components/Todo/TodoButtons';
import { showTodo } from '../services/todoApi'; // Import the showTodo function
import { UserContext } from '../contexts/userContext';
import { useQuery } from '@tanstack/react-query';
import styles from './Todo.module.css';

const Todo = () => {
    const { authToken } = useContext(UserContext);
    const { todoId } = useParams();
    const { status, error, data: todo } = useQuery({
        queryKey: ["posts", parseInt(todoId), authToken],
        queryFn: () => showTodo(todoId, authToken)
    })

    if (status === 'loading') {
        return <div className={styles.loading}>Loading...</div>
    }

    if (status === 'error') {
        return <div className={styles.error}>Error: {error.message}</div>
    }

    return (
        <div className={styles.todo_container} style={todo.done ? { backgroundColor: "#9bffb0" } : {}} >
            <div className={styles.todo_header}>
                <h1 className={styles.todo_title}>{todo && todo?.todo}</h1>
                <TodoButtons todo={todo} />
            </div>
            <p className={styles.todo_description}>
                {todo && todo?.description}
            </p>
        </div>
    );
};

export default Todo;
