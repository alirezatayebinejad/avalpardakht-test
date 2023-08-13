import { createContext, useState } from "react";
import { isLoggedIn, getUserData, getAuthToken } from "../services/auth";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
    const [isAuth, setIsAuth] = useState(isLoggedIn());
    const [userData, setUserData] = useState(getUserData());
    const [authToken, setAuthToken] = useState(getAuthToken());
    const updateAuthStatus = () => {
        setIsAuth(isLoggedIn());
        setUserData(getUserData());
        setAuthToken(getAuthToken());
    };
    return <UserContext.Provider value={{ isAuth, userData, authToken, updateAuthStatus }}>{children}</UserContext.Provider>;
};
export default UserProvider;
