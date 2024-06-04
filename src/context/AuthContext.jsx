import { createContext, useEffect, useState } from "react";
import { FacebookAuthProvider, GoogleAuthProvider, getAuth, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { app } from "../config/firebase.config";;


const auth = getAuth(app)
const provider = new GoogleAuthProvider()
export const AuthContext = createContext()
const ContextProvider = ({ children }) => {

    const [user, setUser] = useState()

    const signInWithGoogle = () => {
        return signInWithPopup(auth, provider)
    }

    const logOut = () => {
        return signOut(auth)
    }

    const facebookProvider = new FacebookAuthProvider()
    const signInWithFacebook = () => {
        return signInWithPopup(auth, facebookProvider)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            if (currentUser) setUser(currentUser);
        })
        return () => unsubscribe
    }, [user])
    const authInfo = { user, setUser, signInWithGoogle, logOut, signInWithFacebook }
    return <>
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    </>
}
export default ContextProvider