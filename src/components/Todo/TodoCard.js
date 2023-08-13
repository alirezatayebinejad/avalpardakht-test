import React from 'react'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditIcon from '@mui/icons-material/Edit';
import TaskAltIcon from '@mui/icons-material/TaskAlt';

function TodoCard() {
    return (
        <div>
            <div>
                <h3>title</h3>
                <p>description is shown here but the short edition</p>
            </div>
            <div>
                <button><TaskAltIcon /></button>
                <button><EditIcon /></button>
                <button><DeleteOutlineIcon /></button>
            </div>
        </div>
    )
}

export default TodoCard