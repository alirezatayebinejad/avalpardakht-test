import React, { useState } from 'react';

const AddTodo = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleAddTodo = async () => {

    };

    return (
        <div>
            <h1>Add Todo</h1>
            <div>
                <label htmlFor="title">Title:</label>
                <input
                    type="text"
                    id="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="description">Description:</label>
                <textarea
                    id="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
            </div>
            <div>
                <button onClick={handleAddTodo}>Add Todo</button>
            </div>
        </div>
    );
};

export default AddTodo;
