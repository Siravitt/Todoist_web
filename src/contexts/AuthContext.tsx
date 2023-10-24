import { createContext, useState } from "react";

type Props = {
    children: string | JSX.Element | JSX.Element[]
}

type authUser = {
    username: string;
    email: string;
}

interface AuthContextType {
    authUser: null;
    // login: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

function AuthContextProvider({ children }: Props) {
    const [authUser, setAuthUser] = useState<authUser | null>(null);

    return <AuthContext.Provider value={{  }}>
        {children}
    </AuthContext.Provider>
}