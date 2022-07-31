import { createContext, useContext, useState } from "react";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    if(window.localStorage.getItem('user') && !user) {
        setUser(JSON.parse(window.localStorage.getItem('user')));
    }
    
    const login = user => {
        setUser(user);
        window.localStorage.setItem('user', JSON.stringify(user));
    }
    const logout = () => {
        setUser(null);
        window.localStorage.removeItem('user');
    }
    
    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    return useContext(AuthContext);
}