import React, { useContext } from 'react';
import EditIcon from '@mui/icons-material/Edit';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import { useNavigate } from 'react-router-dom';
import { updateDoneStatus } from '../../services/todoApi';
import { UserContext } from '../../contexts/userContext';
import styles from './TodoButtons.module.css';

const TodoButtons = ({ todo }) => {
    const { authToken } = useContext(UserContext);
    const navigate = useNavigate();

    const handleDoneBtn = async (e) => {
        e.stopPropagation();
        try {
            await updateDoneStatus(todo.id, !todo.done, authToken);
        } catch (error) {
            console.error('Error updating done status:', error);
        }
    };

    const handleEditBtn = (e) => {
        e.stopPropagation();
        navigate(`/edit/${todo.id}`);
    };

    return (
        <div className={styles.todo_buttons}>
            <button className={styles.todo_button} onClick={handleDoneBtn}><TaskAltIcon /></button>
            <button className={styles.todo_button} onClick={handleEditBtn}><EditIcon /></button>
        </div>
    );
};

export default TodoButtons;
