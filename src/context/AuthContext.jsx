import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, getAuth, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { app } from "../config/firebase.config";;


const auth = getAuth(app)
const provider = new GoogleAuthProvider()
export const AuthContext = createContext()
const ContextProvider = ({ children }) => {

    const [user, setUser] = useState()

    const signInWithGoogle = () => {
        return signInWithPopup(auth, provider)
    }

    const signOutWithGoogle = () => {
        return signOut(auth)
    }


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            if (currentUser) setUser(currentUser);
        })
        return () => unsubscribe
    }, [user])
    const authInfo = { user, setUser, signInWithGoogle, signOutWithGoogle }
    return <>
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    </>
}
export default ContextProvider