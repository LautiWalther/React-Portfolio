import { Navigate } from "react-router-dom";
import { useAuth } from "./auth";

function RequireAuth({ children }) {
    const auth = useAuth();

    if(auth.user) {
        return <Navigate to="/profile" />
    }
    return children
}

export default RequireAuth;