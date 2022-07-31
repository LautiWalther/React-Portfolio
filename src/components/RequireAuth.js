import { Navigate } from "react-router-dom";
import { useAuth } from "./auth";

function RequireAuth({ children }) {
    const auth = useAuth();

    if(!auth.user) {
        return <Navigate to="/admin" />
    }
    return children
}

export default RequireAuth;