import React, { createContext } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth'
import { useState } from 'react';
import app from '../../firebase/firebase.config';
import { useEffect } from 'react';

export const AuthContext = createContext()
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);


    const providerLogin = (Provider) =>{
        return signInWithPopup(auth, Provider);
    }


    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const signIn = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = () =>{
        return signOut(auth)
    }


    useEffect( () =>{
       const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
            console.log('inside auth state change', currentUser);
            setUser(currentUser)
        });
        return () =>{
            unsubscribe();
        }
    }, [])


    const authInfo = {user, providerLogin, logOut, createUser, signIn}

    return (
        <AuthContext.Provider value={authInfo}>
                {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;