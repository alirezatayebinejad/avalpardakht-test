import React from 'react';
import { useNavigate } from 'react-router-dom';
import TodoButtons from '../Todo/TodoButtons';
import styles from './TodoCard.module.css';

function TodoCard({ todo }) {
    const navigate = useNavigate();

    const handleCardClick = () => {
        navigate(`/todo/${todo.id}`);
    };
    console.log(todo.done);
    return (
        <div className={styles.todo_card} style={todo.done ? { backgroundColor: "#9bffb0" } : {}} onClick={handleCardClick}>
            <div className={styles.todo_text}>
                {todo.done ? <del className={styles.done_text}>{todo.todo}</del> : <span>{todo.todo}</span>}
            </div>
            <div>
                <TodoButtons todo={todo} />
            </div>
        </div>
    );
}

export default TodoCard;
