import React from 'react'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditIcon from '@mui/icons-material/Edit';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import { useNavigate } from 'react-router-dom';

const TodoButtons = ({ todo }) => {
    const navigate = useNavigate();

    const handleDoneBtn = (e) => {
        e.stopPropagation();
        //api update request
    };
    const handleEditBtn = (e) => {
        e.stopPropagation();
        navigate(`/edit/${todo.id}`)
    };
    const handleDeleteBtn = (e) => {
        e.stopPropagation();
        //api delete request
    };
    return (
        <div>
            <button onClick={(e) => handleDoneBtn(e)}><TaskAltIcon /></button>
            <button onClick={(e) => handleEditBtn(e)}><EditIcon /></button>
            <button onClick={(e) => handleDeleteBtn(e)}><DeleteOutlineIcon /></button>
        </div>
    )
}

export default TodoButtons;