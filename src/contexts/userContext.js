import { createContext, useState } from "react";
import { isLoggedIn, getUserData } from "../services/auth";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
    const [isAuth, setIsAuth] = useState(isLoggedIn());
    const [userData, setUserData] = useState(getUserData());

    return <UserContext.Provider value={{ isAuth, userData }}>{children}</UserContext.Provider>;
};
export default UserProvider;
