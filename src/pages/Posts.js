import { useEffect, useState } from "react";
import Hero from "../components/Hero";

import link_public from '../components/public';

import SimplePost from '../components/SimplePost';

function Posts() {
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

    return (
        <>
            <Hero image={ link_public('/posts.jpg') }  title='Posts' subtitle='A place where i express my thoughts' btn={false} />
            <div class="container" id="list-posts">
                {listposts.map(post => {
                    return (
                        <SimplePost key={post.id} id={post.id} title={post.title} subtitle={post.subtitle} date={post.uploaded} />
                    )
                })}
            </div>
        </>
    )
}

export default Posts;