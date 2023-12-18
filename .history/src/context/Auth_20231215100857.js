import { createContext, useContext } from "react";
import { auth } from "./firebase"
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChange
} from 'firebase/auth'

const AuthContext = createContext()

export function AuthContextProvider({children}) {
    const [user, setUser] = useSta

    return (
        <AuthContext.Provider>
            {children}
        </AuthContext.Provider>
    )
}

export function UserAuth() {
    return useContext(AuthContext)
}