import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({children}) =>{
    
    // const [token, setToken] = useState(localStorage.getItem(token));
    const StoreTokenInLS = (serverToken) =>{
        // setToken(serverToken);
        return localStorage.setItem('token', serverToken)
    }

    const LogOutUser = (serverToken) =>{
        // setToken('');
        return localStorage.removeItem("token" , serverToken);
    }
    return (
    <AuthContext.Provider value = {{StoreTokenInLS, LogOutUser}}>
        {children}
    </AuthContext.Provider>
    )
}

export const useAuth = () =>{

    const AuthValue = useContext(AuthContext);
    if(!AuthValue){
        throw new Error("useAuth used outside of the provider");
    }
    return AuthValue ;
}