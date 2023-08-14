import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { UserContext } from "../contexts/userContext";

function PrivateRoute({ children }) {
    const { isAuth } = useContext(UserContext);

    return <div>{isAuth ? <Outlet /> : <Navigate to="/login" />}</div>;
}
export default PrivateRoute;