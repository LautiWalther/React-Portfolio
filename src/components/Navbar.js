import {
    Link,
} from "react-router-dom";
import { useAuth } from "./auth";


function Navbar() {
    const auth = useAuth();
    return (
        <nav class="teal">
          <div class="nav-wrapper container">
            <a href="#" class="brand-logo center">Lautaro</a>
            <ul id="nav-mobile" class="left hide-on-med-and-down">
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/posts'>Posts</Link>
                </li>
            </ul>
            <ul id="nav-mobile" class="right hide-on-med-and-down">
                <li>
                    <Link to='/contact'>Contact</Link>
                </li>
                <li>
                    <Link to='/projects'>Portfolio</Link>
                </li>
                <li>
                    {
                        !auth.user && (
                            <Link to='/admin'>Login</Link>
                        )
                    }
                </li>
            </ul>
          </div>
        </nav>
    )
}
export default Navbar;