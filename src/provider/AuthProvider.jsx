
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";
import axios from "axios";

export const AuthContext = createContext(null)
const googleProvider = new GoogleAuthProvider()
const AuthProvider = ({children}) => {
const [user, setUser] = useState({})
    const googleLogin = ()=>{
return signInWithPopup(auth, googleProvider)

    }
    const emailLogin = (email,password)=>{
        return signInWithEmailAndPassword(auth, email, password)
    }
const logOut = ()=>{
    signOut(auth)
}
    const createUser = (email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const updateUser = (name)=>{
        return updateProfile(auth.currentUser, {
            displayName: name,
            
        })
    }
const saveUser = async(userData)=>{
await axios.post('http://localhost:5000/users', userData)
}
    useEffect(()=>{
const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
if(currentUser){
    setUser(currentUser)

  
    const name = currentUser?.displayName;
    const  email= currentUser?.email;
   const userRole= "user";
 const userData = {
    name,
   email,
 
    userRole
 }


  saveUser(userData)
    
}

})
return ()=>unsubscribe()
    },[])

    const userInfo = {googleLogin ,updateUser, createUser, emailLogin, logOut, user}
    return (
        <div>
            <AuthContext.Provider value={userInfo}>

                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;
