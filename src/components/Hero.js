import { Link } from 'react-router-dom';
import './css/Hero.css';


export default function Hero(props) {
    const styles = {
        'hero': {
            'background-image': 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("'+props.image+'")'
        }
    }
    return (
        <div class="hero-image" style={styles.hero}>
            <div class="overlay"></div>
            <div class="hero-text">
                <h1>{props.title}</h1>
                <p class='flow-text'>{props.subtitle}</p>
                { props.btn ? <Link to='/contact' class='btn blue-grey lighten-5 black-text waves-effect' style={{'fontWeight': 'bold'}}>{props.btn}</Link> : '' }
            </div>
        </div>
    )
}