import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAuth } from "../components/auth";
import Hero from "../components/Hero";
import link_public from "../components/public";

import M from "materialize-css";

import MediumEditor from "medium-editor";

import './css/Post.css';

function Post() {
    const [post, setPost] = useState({});
    const [editing, setEditing] = useState(false);
    var [reload, setReload] = useState(0);
    const [editor, setEditor] = useState(null);
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
    }, [reload])

    const auth = useAuth();
    
    document.addEventListener('DOMContentLoaded', function() {
        var elems = document.querySelectorAll('.fixed-action-btn');
        var instances = M.FloatingActionButton.init(elems);
    });
    
    const publishPost = () => {

    }

    const unpublishPost = () => {

    }

    const saveContent = () => {
        setEditing(false);
        setReload(reload+=1);
        console.log(post);
        editor.destroy()
    }

    const saveImage = () => {

    }

    const editContent = () => {
        var edit = new MediumEditor('.editable');
        setEditor(edit);
        setEditing(true);
    }

    const deletePost = () => {

    }

    const emptyFunction = () => {

    }

    return (
        <>
            <Hero image={post.image ? link_public('/'+post.image) :link_public('/bg_not_found.jpg')} title={post.title} subtitle={post.subtitle} btn={false} />
            <article>
                <div class="row">
                    <div class="col s4 offset-s4 editable" dangerouslySetInnerHTML={{__html: post.text}} onChange={e => setPost({
                        text: e.target.value
                    })}>
                    </div>
                </div>
            </article>
            {
                auth.user ? (
                    <div class="fixed-action-btn">
                        <a class="btn-floating btn-large green" onClick={editing ? saveContent : emptyFunction}>
                            <i class="large material-icons">{editing ? 'save' : 'settings'}</i>
                        </a>
                        <ul style={editing ? {display:'none'} : {display:'block'}}>
                            <li><a class="btn-floating red" onClick={ deletePost }><i class="material-icons">delete</i></a></li>
                            <li><a class="btn-floating yellow darken-1" onClick={ editContent }><i class="material-icons">mode_edit</i></a></li>
                            <li><a class="btn-floating green" onClick={ publishPost }><i class="material-icons">published_with_changes</i></a></li>
                            <li><a class="btn-floating blue" onClick={ unpublishPost }><i class="material-icons">unpublished</i></a></li>
                        </ul>
                    </div>
                ) : ''
            }
        </>
    )
}

export default Post;