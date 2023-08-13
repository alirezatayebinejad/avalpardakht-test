import TodoList from './pages/TodoList';
import AddTodo from './pages/AddTodo';
import EditTodo from './pages/EditTodo';
import Todo from './pages/Todo';
import Login from './pages/Login';

let routes = [
    { path: "/", element: <TodoList /> },
    { path: "/add", element: <AddTodo /> },
    { path: "/edit/:todoId", element: <EditTodo /> },
    { path: "/todo/:todoId", element: <Todo /> },
    { path: "/login", element: <Login /> },
];

export default routes;