import { useContext } from "react";
import { AuthContext } from "../context/auth-context";

const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context)
        throw new Error("Auth context must be ues inside AuthProvider");

    return context;
};

export default useAuth;
