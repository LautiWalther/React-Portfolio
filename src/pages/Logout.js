import { useNavigate } from "react-router-dom";
import { useAuth } from "../components/auth";

export default function Logout() {
    const auth = useAuth();
    auth.logout();
    useNavigate('/');
}