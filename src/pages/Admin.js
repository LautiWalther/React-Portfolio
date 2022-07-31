import { useState } from "react";
import { useAuth } from '../components/auth';
import { useNavigate } from "react-router-dom";
import M from "materialize-css";

function Login() {
    const [user, setUser] = useState('');
    const auth = useAuth();
    const navigate = useNavigate();

    function handleLogin() {
        auth.login(user);
        navigate('/');
    }

    return (
        <>
            <div class="container row">
                <div class="input-field col s6">
                    <i class="material-icons prefix">account_circle</i>
                    <input id="icon_prefix" type="text" onChange={e => setUser(e.target.value)} />
                    <label for="icon_prefix">Username</label>
                </div>
                <div class="input-field col s6">
                    <i class="material-icons prefix">key</i>
                    <input id="icon_prefix" type="password" />
                    <label for="icon_prefix">Password</label>
                </div>
                <div class="col s12 center">
                    <a class="btn" onClick={handleLogin}>Login</a>
                </div>
            </div>
        </>
    )
}

export default Login;