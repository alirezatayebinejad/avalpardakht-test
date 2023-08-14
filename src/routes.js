import TodoList from './pages/TodoList';
import AddTodo from './pages/AddTodo';
import EditTodo from './pages/EditTodo';
import Todo from './pages/Todo';
import Login from './pages/Login';
import PrivateRoute from './pages/PrivateRoute';

let routes = [
    {
        path: "/*",
        element: <PrivateRoute />,
        children: [
            { path: "", element: <TodoList /> },
            { path: "add", element: <AddTodo /> },
            { path: "edit/:todoId", element: <EditTodo /> },
            { path: "todo/:todoId", element: <Todo /> },
        ],
    },
    { path: "/login", element: <Login /> },
];

export default routes;