import React, { useState } from 'react';
import { addTodo } from '../../services/todoApi';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import styles from './AddTodoForm.module.css';

const AddTodoForm = () => {
    const [todo, setTodo] = useState('');
    const [description, setDescription] = useState('');
    const [alert, setAlert] = useState(null);
    const queryClient = useQueryClient();
    const { status, error, mutate } = useMutation({
        mutationFn: () => addTodo(todo, description),
        onMutate: () => {
            setAlert('');
        },
        onSuccess: () => {
            setAlert('Todo added to the list');
            setTodo('');
            setDescription('');
            queryClient.invalidateQueries('todos');
        }
    });

    const handleAddTodo = async () => {
        mutate();
    };

    return (
        <div className={styles.add_todo_form}>
            <div>
                <label htmlFor="title">Title:</label>
                <input
                    className={styles.form_input}
                    type="text"
                    id="title"
                    value={todo}
                    onChange={(e) => setTodo(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="description">Description:</label>
                <textarea
                    className={styles.form_textarea}
                    id="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
            </div>
            <div>
                <button
                    className={styles.form_button}
                    onClick={handleAddTodo}
                    disabled={status === 'loading'}
                >
                    Add Todo
                </button>
                {alert && <p className={styles.form_alert}>{alert}</p>}
            </div>
        </div>
    );
};

export default AddTodoForm;
