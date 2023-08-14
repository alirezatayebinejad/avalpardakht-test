import React from 'react';
import EditIcon from '@mui/icons-material/Edit';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import { useNavigate } from 'react-router-dom';
import { updateDoneStatus } from '../../services/todoApi';
import styles from './TodoButtons.module.css';
import { useMutation, useQueryClient } from '@tanstack/react-query';

const TodoButtons = ({ todo }) => {
    const navigate = useNavigate();
    const queryClient = useQueryClient();
    const { status, error, mutate } = useMutation({
        mutationFn: () => updateDoneStatus(todo.id, !todo.done),
        onSuccess: () => {
            queryClient.invalidateQueries('todos');
        }
    });

    const handleDoneBtn = async (e) => {
        e.stopPropagation();
        mutate();
    };

    const handleEditBtn = (e) => {
        e.stopPropagation();
        navigate(`/edit/${todo.id}`);
    };

    return (
        <div className={styles.todo_buttons}>
            <button disabled={status === "loading" ? true : false} className={styles.todo_button} onClick={handleDoneBtn}><TaskAltIcon /></button>
            <button className={styles.todo_button} onClick={handleEditBtn}><EditIcon /></button>
        </div>
    );
};

export default TodoButtons;
