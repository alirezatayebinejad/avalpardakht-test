import React, { useState, useContext, useEffect } from 'react';
import { updateTodo } from '../../services/todoApi';
import { UserContext } from '../../contexts/userContext';
import { useParams } from 'react-router-dom';
import { showTodo } from '../../services/todoApi';
import styles from './EditTodoForm.module.css';

const EditTodoForm = () => {
    const { authToken } = useContext(UserContext);
    const { todoId } = useParams();
    const [todo, setTodo] = useState(null);
    const [title, setTitle] = useState(todo ? todo.todo : '');
    const [description, setDescription] = useState(todo ? todo.description : '');
    const [isLoading, setIsLoading] = useState(false);
    const [alert, setAlert] = useState(null);

    useEffect(() => {
        setIsLoading(true);
        setAlert(null);
        const fetchTodo = async () => {
            try {
                const todoInfo = await showTodo(todoId, authToken);
                setTitle(todoInfo.todo);
                setDescription(todoInfo.description);
                setTodo(todoInfo);
            } catch (error) {
                console.error('Error fetching todo:', error);
                setIsLoading(false);
                setTodo('empty');
            }
        };
        fetchTodo();
        setIsLoading(false);
    }, [todoId, authToken]);

    const handleUpdateTodo = async () => {
        setIsLoading(true);
        setAlert(null);
        try {
            await updateTodo(todo.id, title, description, authToken);
            setAlert("todo is updated")
        } catch (error) {
            console.error('Error updating todo:', error);
            setIsLoading(false);
        }
        setIsLoading(false);
    };

    if (todo === 'empty') {
        return <h2>This post does not exist</h2>;
    }
    if (isLoading) {
        return <h2>Loading...</h2>;
    }
    return (
        <div className={styles.edit_todo_form}>
            {todo && (
                <>
                    <div>
                        <label htmlFor="title">Title:</label>
                        <input
                            className={styles.form_input}
                            type="text"
                            id="title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
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
                            onClick={handleUpdateTodo}
                            disabled={isLoading}
                        >
                            Update Todo
                        </button>
                    </div>
                    {alert !== null && <p className={styles.alert}>{alert}</p>}

                </>
            )}
        </div>
    );
};

export default EditTodoForm;
