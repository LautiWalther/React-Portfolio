import { useEffect, useState } from "react";
import { useAuth } from "../components/auth";
import Hero from "../components/Hero";

import link_public from '../components/public';

import SimplePost from '../components/SimplePost';

import { useNavigate } from "react-router-dom";

function Posts() {
    const auth = useAuth();
    const navigate = useNavigate();

    const [listposts, setPosts] = useState([]);
    useEffect(() => {
        
        var finished = false;

        const fetchPosts = async () => {
            const data = await fetch('http://localhost/portfolio-backend/post/read.php', {
                method: 'GET',
                contentType: false,
                processData: false,
            });
            const json = await data.json();

            if(!finished) {
                setPosts(json);
            }
        }
        
        fetchPosts().catch(console.error);

        return () => finished = true;
    }, [])

    const newPost = async () => {
        var data = new FormData();
        data.append('token', auth.user.token);
        data.append('user', auth.user.id);

        const response = await fetch('http://localhost/portfolio-backend/post/create.php', {
            method: 'POST',
            contentType: false,
            processData: false,
            body: data
        });
        const json = await response.json();
        navigate('/post/'+json.id, { replace: true });
    }

    return (
        <>
            <Hero image={ link_public('/posts.jpg') }  title='Posts' subtitle='A place where i express my thoughts' btn={false} />
            <div className="container" id="list-posts">
                {listposts.map(post => {
                    return (
                        <SimplePost key={post.id} id={post.id} title={post.title} subtitle={post.subtitle} date={post.uploaded} />
                    )
                })}
            </div>
            {
                auth.user ? (
                    <div className="fixed-action-btn">
                        <a className="btn-floating btn-large green" onClick={ newPost }>
                            <i className="large material-icons">add</i>
                        </a>
                    </div>
                ) : ''
            }
        </>
    )
}

export default Posts;