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
            <div className="container-login100">
                <div className="wrap-login100">
                    <div className="login100-form-title" id="signin_form_title">
                        <span className="login100-form-title-1">
                            Sign In
                        </span>
                    </div>
                    <div className='center hidden' id="error-box">
                        <span id="error"></span>
                    </div>
                    <form className="login100-form validate-form">
                        
                        <div className="input-field col s12">
                            <i className="material-icons prefix">account_circle</i>
                            <input id="username" type="text" onChange={e => setUser(e.target.value)} />
                            <label for="username">Username</label>
                        </div>

                        <div className="input-field col s12">
                            <i className="material-icons prefix">key</i>
                            <input id="password" type="password" onChange={e => setPassword(e.target.value)}/>
                            <label for="password">Password</label>
                        </div>

                        <div className="container-login100-form-btn">
                            <a className="btn" onClick={handleLogin} id='login_btn'>Login</a>
                            <br />
                        </div>
                        
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login;