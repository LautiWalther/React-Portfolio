import { useState } from "react";

function Login() {
    const [user, setUser] = useState('');

    return (
        <>
            <div class="container row">
                <div class="input-field col s6">
                    <i class="material-icons prefix">account_circle</i>
                    <input id="icon_prefix" type="text" />
                    <label for="icon_prefix">Username</label>
                </div>
                <div class="input-field col s6">
                    <i class="material-icons prefix">key</i>
                    <input id="icon_prefix" type="password" />
                    <label for="icon_prefix">Password</label>
                </div>
                <div class="col s12 center">
                    <a class="btn">Login</a>
                </div>
            </div>
        </>
    )
}

export default Login;