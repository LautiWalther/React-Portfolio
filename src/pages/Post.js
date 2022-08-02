import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Hero from "../components/Hero";
import link_public from "../components/public";

import './Post.css';

function Post() {
    const [post, setPost] = useState({});
    let { postId } = useParams();
    useEffect(() => {
        const getPost = async () => {
            let isReady = false;

            const response = await fetch(`http://localhost/portfolio-backend/post/read.php?post=${postId}`);
            const json = await response.json();
            if(!isReady) {
                setPost(json);
            }
            return () => isReady = true;
        }
        getPost();
    }, [])
    return (
        <>
            <Hero image={post.image ? link_public('/'+post.image) :link_public('/bg_not_found.jpg')} title={post.title} subtitle={post.subtitle} btn={false} />
            <article>
                <div class="row">
                    <div class="col s4 offset-s4" dangerouslySetInnerHTML={{__html: post.text}}>
                    </div>
                </div>
            </article>
        </>
    )
}

export default Post;