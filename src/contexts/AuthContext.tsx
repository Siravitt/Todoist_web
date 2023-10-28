import { createContext, useState } from "react";

type Props = {
    children: string | JSX.Element | JSX.Element[]
}

type AuthUserType = {
    username: string;
    email: string;
}

interface AuthContextType {
    authUser: object | null;
    // login: () => void;
}

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

function AuthContextProvider({ children }: Props) {
    const [authUser, setAuthUser] = useState<AuthUserType | null>(null);

    return (
        <AuthContext.Provider value={{ authUser }}>
            {children}
        </AuthContext.Provider>
    );
}

export { AuthContext };
export type { AuthContextType, AuthUserType };
export default AuthContextProvider;