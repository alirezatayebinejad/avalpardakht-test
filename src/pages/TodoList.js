import React from 'react'
import TodoCard from '../components/Todo/TodoCard'
import { Link } from 'react-router-dom'

function TodoList() {
    return (
        <div>
            <div>
                <h2>Todo List</h2>
                <Link to={"/add"}><button>Add New</button></Link>
            </div>
            <div>
                <TodoCard />
                <TodoCard />
                <TodoCard />
                <TodoCard />
            </div>
        </div>
    )
}




export default TodoList