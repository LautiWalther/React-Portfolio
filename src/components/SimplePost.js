import { Link } from 'react-router-dom';

import './css/SimplePost.css';

export default function Post(props) {
    let date = props.date.split(' ')[0];
    return (
        <>
            <div class="section">
                <div class="preview-post">
                    <Link to={'/post/'+props.id}>
                        <h2 class="post-title">{props.title}</h2>
                        <h3 class="post-subtitle">{props.subtitle}</h3>
                    </Link>
                    <p class="post-meta">Uploaded on {date}</p>
                </div>
            </div>
            <div class="divider"></div>
        </>
    )
}