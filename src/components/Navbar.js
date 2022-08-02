import {
    Link,
} from "react-router-dom";
import { useAuth } from "./auth";
import M from "materialize-css";

import link_public from "./public";

import './Navbar.css';

function Navbar() {
    const auth = useAuth();
    
    document.addEventListener('DOMContentLoaded', () => {
        var elems = document.querySelectorAll('.sidenav');
        var instances = M.Sidenav.init(elems);

        document.addEventListener('scroll', () => {
            if((window.pageYOffset) > 300) {
                document.getElementById('navbar-fixed').classList.add('teal');
                document.getElementById('navbar-fixed').classList.remove('transparent');
            }else {
                document.getElementById('navbar-fixed').classList.add('transparent');
                document.getElementById('navbar-fixed').classList.remove('teal');
            }
        })
    });
    
    return (
        <>
            <nav class="transparent" id="navbar-fixed">
                <div class="nav-wrapper container">
                    <a href="#" data-target="slide-out" class="sidenav-trigger"><i class="material-icons">menu</i></a>
                    <a href="#" class="brand-logo center">Lautaro</a>
                    <ul id="nav-mobile" class="left hide-on-med-and-down">
                        <li>
                            <Link to='/'>Home</Link>
                        </li>
                        <li>
                            <Link to='/posts'>Posts</Link>
                        </li>
                        <li>
                            <Link to='/contact'>Contact</Link>
                        </li>
                        <li>
                            <Link to='/projects'>Portfolio</Link>
                        </li>
                    </ul>
                    <ul id="nav-mobile" class="right hide-on-med-and-down">
                        <li>
                            {
                                !auth.user ? <Link to='/admin'>Login</Link> : ''
                            }
                            
                            {
                                auth.user ? <Link to='/logout'>Logout</Link> : ''
                            }
                        </li>
                        <li>
                            {
                                auth.user ? <Link to='/profile'>Profile</Link> : ''
                            }
                        </li>
                    </ul>
                </div>
            </nav>
            <ul id="slide-out" class="sidenav teal">
                <li>
                    <div class="user-view">
                        <div class="background">
                            <img src='' />
                        </div>
                        <a href="#user">
                            <img class="circle" src={ link_public('/yo.jpg') } />
                        </a>
                        <a href="#name">
                            <span class="white-text name">Lautaro Walther</span>
                        </a>
                        <a href="#email">
                            <span class="white-text email">lautarowalther@gmail.com</span>
                        </a>
                    </div>
                </li>
                <li>
                    <Link class="waves-effect" to='/'><i class="material-icons">house</i>Home</Link>
                </li>
                <li>
                    <Link class="waves-effect" to='/posts'><i class="material-icons">list</i>Posts</Link>
                </li>
                <li>
                    <Link class="waves-effect" to='/contact'><i class="material-icons">alternate_email</i>Contact</Link>
                </li>
                <li>
                    <Link class="waves-effect" to='/portfolio'><i class="material-icons">work</i>Portfolio</Link>
                </li>
                <li>
                    <div class="divider"></div>
                </li>
                <li>
                    {
                        !auth.user ? <Link class="waves-effect" to='/admin'><i class="material-icons">login</i>Login</Link> : ''
                    }
                    
                    {
                        auth.user ? <Link class="waves-effect" to='/logout'><i class="material-icons">logout</i>Logout</Link> : ''
                    }
                </li>
                <li>
                    {
                        
                        auth.user ? <Link class="waves-effect" to='/profile'><i class="material-icons">person</i>Profile</Link> : ''
                    }
                </li>
            </ul>
        </>
    )
}
export default Navbar;