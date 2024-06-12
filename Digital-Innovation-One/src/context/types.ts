import { IUser } from "../types/user";

export interface IAuthContext {
    user: IUser
    hangleLogin: (loginData: ILoginData) => Promise<void>
    hangleLogout: () => void
}

export interface IAuthContextProviderProps{
    children: React.ReactNode;
}

export interface ILoginData{
    email: string;
    password: string;
}