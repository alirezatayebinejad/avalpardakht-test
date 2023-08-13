import { createContext, useState } from "react";
import { isLoggedIn, getUserData } from "../services/auth";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
    const [isAuth, setIsAuth] = useState(isLoggedIn());
    const [userData, setUserData] = useState(getUserData());
    const updateAuthStatus = () => {
        setIsAuth(isLoggedIn());
        setUserData(getUserData());
    };
    return <UserContext.Provider value={{ isAuth, userData, updateAuthStatus }}>{children}</UserContext.Provider>;
};
export default UserProvider;
