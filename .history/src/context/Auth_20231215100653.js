import { createContext, useContext } from "react";
import { auth } from ""

const AuthContext = createContext()

export function AuthContextProvider({children}) {
    return (
        <AuthContext.Provider>
            {children}
        </AuthContext.Provider>
    )
}

export function UserAuth() {
    return useContext(AuthContext)
}