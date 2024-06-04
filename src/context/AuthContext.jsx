import { createContext, useEffect, useState } from "react";
import { FacebookAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
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

    const registerWithEmailPass = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const loginViaEmailPass = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            if (currentUser) setUser(currentUser);
        })
        return () => unsubscribe
    }, [user])
    const authInfo = { user, setUser, signInWithGoogle, logOut, signInWithFacebook, registerWithEmailPass, loginViaEmailPass }
    return <>
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    </>
}
export default ContextProvider