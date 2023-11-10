import { useContext } from "react";
import { AuthContext, AuthContextType } from "../contexts/AuthContext";

function useAuth(): AuthContextType {
    return useContext(AuthContext);
}

export default useAuth;