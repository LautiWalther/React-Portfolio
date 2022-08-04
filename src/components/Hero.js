import { Link } from 'react-router-dom';
import './css/Hero.css';


export default function Hero(props) {
    const styles = {
        'hero': {
            'backgroundImage': 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("'+props.image+'")'
        }
    }
    return (
        <div className="hero-image" style={styles.hero}>
            <div className="overlay"></div>
            <div className="hero-text">
                <h1>{props.title}</h1>
                <p className='flow-text'>{props.subtitle}</p>
                { props.btn ? <Link to='/contact' className='btn blue-grey lighten-5 black-text waves-effect' style={{'fontWeight': 'bold'}}>{props.btn}</Link> : '' }
            </div>
        </div>
    )
}