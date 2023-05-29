import React, { useState, useContext, createContext } from 'react'
import { register } from '../services/UserService';

export const UserContext = createContext();

export const UserProvider = (props) => {
    const { children } = props;
    const [user, setUser] = useState(null);

    const onRegister = async (email, password) => {
        try {
            await register(email, password);
            console.log(res);
            return true;
        } catch (error) {
            console.log(error);
        }
        return false;
    }

    return (
        <UserContext.Provider
            value={{
                user, setUser, onRegister
            }}>
            {children}
        </UserContext.Provider>
    )
}
