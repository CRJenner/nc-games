import { createContext, useState } from "react";

export const UserContext = createContext()

export const UserProvider = (props) => {
    const [user, setUser] = useState({username: 'bob'})

const logout = () => {
    setUser(null)
}

    return <UserContext.Provider value={{user, setUser, logout}}>
    {props.children}
    </UserContext.Provider>
}