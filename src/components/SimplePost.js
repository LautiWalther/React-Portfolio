import { Link } from 'react-router-dom';

import './css/SimplePost.css';

export default function Post(props) {
    let date = props.date.split(' ')[0];
    return (
        <>
            <div className="section">
                <div className="preview-post">
                    <Link to={'/post/'+props.id}>
                        <h2 className="post-title">{props.title}</h2>
                        <h3 className="post-subtitle">{props.subtitle}</h3>
                    </Link>
                    <p className="post-meta">Uploaded on {date}</p>
                </div>
            </div>
            <div className="divider"></div>
        </>
    )
}