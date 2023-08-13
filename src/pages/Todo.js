import React from 'react'
import EditIcon from '@mui/icons-material/Edit';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import TaskAltIcon from '@mui/icons-material/TaskAlt';

const Todo = () => {
    return (
        <div>
            <div>
                <div>
                    <h1>title of to do</h1>
                    <div>
                        <button><TaskAltIcon /></button>
                        <button><EditIcon /></button>
                        <button><DeleteOutlineIcon /></button>
                    </div>
                </div>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus itaque assumenda, magni quaerat repellat dolorem nesciunt, laborum, consequatur illum totam architecto asperiores tempora vel iste deleniti esse laudantium molestiae ut!
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus itaque assumenda, magni quaerat repellat dolorem nesciunt, laborum, consequatur illum totam architecto asperiores tempora vel iste deleniti esse laudantium molestiae ut!
                </p>
            </div>
        </div>
    )
}

export default Todo