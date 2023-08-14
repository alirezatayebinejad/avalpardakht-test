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
                {todo.done === true ? <del><h3>{todo.todo}</h3></del> : <h3>{todo.todo}</h3>}
            </div>
            <div>
                <TodoButtons todo={todo} />
            </div>
        </div>
    );
}

export default TodoCard;
