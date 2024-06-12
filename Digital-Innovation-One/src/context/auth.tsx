import { createContext, useState } from "react";
import { IUser } from '../types/user';
import { IAuthContext, IAuthContextProviderProps, ILoginData } from "./types";
import { useNavigate } from "react-router";
import { api } from "../services/api";

// --------------------------------------------------------------

export const AuthContext = createContext<IAuthContext>({} as IAuthContext);

export const AuthContextProvider = ({children}: IAuthContextProviderProps)=>{
    const [user, setUser ] = useState<IUser>({} as IUser);

    const navigate = useNavigate();

    const hangleLogin = async (loginData: ILoginData)=>{
        try {
            const { data } = await api.get(`users?email=${loginData.email}&password=${loginData.password}`);

            if (data.length === 1){
                setUser(data[0]);
                navigate('/feed');
            }else{
                alert('E-mail ou password incorretos');
            }

        } catch (error) {
            console.error('Erro:', error);
            alert('E-mail ou password está errado');
        }
    };

    const hangleLogout = ()=>{
        setUser({} as IUser);
        navigate('/login');
    };

    return (
        <AuthContext.Provider value={{user, hangleLogin, hangleLogout}}>
            {children}
        </AuthContext.Provider>
    )
};