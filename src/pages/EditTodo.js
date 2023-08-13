import React, { useState } from 'react';

const EditTodo = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');


    const handleUpdateTodo = async () => {

    };

    return (
        <div>
            <h1>Edit Todo</h1>

            <div>
                <label htmlFor="title">Title:</label>
                <input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)} />
            </div>
            <div>
                <label htmlFor="description">Description:</label>
                <textarea id="description" value={description} onChange={(e) => setDescription(e.target.value)}
                />
            </div>
            <div>
                <button onClick={handleUpdateTodo}>Update Todo</button>
            </div>

        </div>
    );
};

export default EditTodo;
