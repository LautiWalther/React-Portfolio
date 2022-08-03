import { useEffect, useState } from "react";
import { useAuth } from '../components/auth';
import { useNavigate } from "react-router-dom";
import M from "materialize-css";

import './css/Admin.css';

function Login() {
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const auth = useAuth();
    const navigate = useNavigate();

    function handleError(response) {
        if (!response.ok) throw Error(response.status);
        document.getElementById('login_btn').classList.remove('disabled')
        return response;
    }

    function handleLogin() {

        var data = new FormData();
        data.append('user', user);
        data.append('password', password);
        document.getElementById('login_btn').classList.add('disabled');
        document.getElementById('error-box').classList.add('hidden');

        fetch('http://localhost/portfolio-backend/user/login.php', {
            method: 'POST',
            contentType: false,
            processData: false,
            body: data
        })
        .then(response => response.json()).then(response => {
            if(response.error) {
                document.getElementById('login_btn').classList.remove('disabled');
                document.getElementById('error-box').classList.remove('hidden');
                document.getElementById('error').innerText = response.error;
            }else {
                auth.login(response);
                navigate('/', { replace: true });
            }
        });
    }

    return (
        <>
            <div class="container-login100">
                <div class="wrap-login100">
                    <div class="login100-form-title" id="signin_form_title">
                        <span class="login100-form-title-1">
                            Sign In
                        </span>
                    </div>
                    <div class='center hidden' id="error-box">
                        <span id="error"></span>
                    </div>
                    <form class="login100-form validate-form">
                        
                        <div class="input-field col s12">
                            <i class="material-icons prefix">account_circle</i>
                            <input id="username" type="text" onChange={e => setUser(e.target.value)} />
                            <label for="username">Username</label>
                        </div>

                        <div class="input-field col s12">
                            <i class="material-icons prefix">key</i>
                            <input id="password" type="password" onChange={e => setPassword(e.target.value)}/>
                            <label for="password">Password</label>
                        </div>

                        <div class="container-login100-form-btn">
                            <a class="btn" onClick={handleLogin} id='login_btn'>Login</a>
                            <br />
                        </div>
                        
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login;