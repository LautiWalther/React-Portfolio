import { Link } from 'react-router-dom';
import { useAuth } from './auth';

import './css/SimplePost.css';

export default function Post(props) {
    let date = props.date.split(' ')[0];
    const auth = useAuth();
    return (
        <>
            <div className="section">
                <div className="preview-post">
                    <Link to={'/post/'+props.id}>
                        <h2 className="post-title">{props.title} {auth.user ? (parseInt(props.hidden) ? <i className='material-icons'>visibility_off</i> : <i className='material-icons'>visibility</i>) : ''}</h2>
                        <h3 className="post-subtitle">{props.subtitle}</h3>
                    </Link>
                    <p className="post-meta">Uploaded on {date}</p>
                </div>
            </div>
            <div className="divider"></div>
        </>
    )
}