import React from 'react';
import { useNavigate } from 'react-router-dom';
import TodoButtons from "../Todo/TodoButtons"

function TodoCard({ todo }) {
    const navigate = useNavigate();

    const handleCardClick = (e) => {
        navigate(`/todo/${todo.id}`)
    };

    return (
        <div onClick={handleCardClick}>
            <div>
                <h3>{todo.todo}</h3>
            </div>
            <div>
                <TodoButtons todo={todo} />
            </div>
        </div>
    );
}

export default TodoCard;
