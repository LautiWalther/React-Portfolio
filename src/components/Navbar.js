import {
    Link,
} from "react-router-dom";
import { useAuth } from "./auth";
import M from "materialize-css";

import link_public from "./public";

import './css/Navbar.css';

function Navbar() {
    const auth = useAuth();
    
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
    
    return (
        <>
            <nav className="transparent" id="navbar-fixed">
                <div className="nav-wrapper container">
                    <a href="#" data-target="slide-out" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                    <a href="#" className="brand-logo center">Lautaro</a>
                    <ul id="nav-mobile" className="left hide-on-med-and-down">
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
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
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
            <ul id="slide-out" className="sidenav teal">
                <li>
                    <div className="user-view">
                        <div className="background">
                            <img src='' />
                        </div>
                        <a href="#user">
                            <img className="circle" src={ link_public('/yo.jpg') } />
                        </a>
                        <a href="#name">
                            <span className="white-text name">Lautaro Walther</span>
                        </a>
                        <a href="#email">
                            <span className="white-text email">lautarowalther@gmail.com</span>
                        </a>
                    </div>
                </li>
                <li>
                    <Link className="waves-effect" to='/'><i className="material-icons">house</i>Home</Link>
                </li>
                <li>
                    <Link className="waves-effect" to='/posts'><i className="material-icons">list</i>Posts</Link>
                </li>
                <li>
                    <Link className="waves-effect" to='/contact'><i className="material-icons">alternate_email</i>Contact</Link>
                </li>
                <li>
                    <Link className="waves-effect" to='/portfolio'><i className="material-icons">work</i>Portfolio</Link>
                </li>
                <li>
                    <div className="divider"></div>
                </li>
                <li>
                    {
                        !auth.user ? <Link className="waves-effect" to='/admin'><i className="material-icons">login</i>Login</Link> : ''
                    }
                    
                    {
                        auth.user ? <Link className="waves-effect" to='/logout'><i className="material-icons">logout</i>Logout</Link> : ''
                    }
                </li>
                <li>
                    {
                        
                        auth.user ? <Link className="waves-effect" to='/profile'><i className="material-icons">person</i>Profile</Link> : ''
                    }
                </li>
            </ul>
        </>
    )
}
export default Navbar;