import React, { Children, createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext = createContext(null)
const auth = getAuth(app)


const AuthProviders = ({children}) => {
    const [user , setUser] = useState(null)
    const [loading , setLoading] = useState(true)


    const createUser = (email , password ) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth , email , password)
    }

    const signIn = (email , password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth , email , password)
    }

    const logOut = ()=>{
        setLoading(true)
        return signOut(auth);
    }

    const updateProfileAndPhoto = (user , name , photo) =>{
        return updateProfile(user , {displayName: name , photoURL: photo})
    }

    

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth , loggedUser =>{
            console.log('logged in user inside auth state observer' , loggedUser)
            setUser(loggedUser);
            setLoading(false)
        })

        return () =>{
            unsubscribe ();
        }
    } , [])
    


    const authInfo = {
        user ,
        loading     ,
        createUser ,
        signIn ,
        logOut ,
        updateProfileAndPhoto
        
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;