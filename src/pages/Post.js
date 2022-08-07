import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAuth } from "../components/auth";
import Hero from "../components/Hero";
import link_public from "../components/public";

import M from "materialize-css";

import MediumEditor from "medium-editor";

import './css/Post.css';

function Post() {
    const [post, setPost] = useState({});
    const [newPost, setNewPost] = useState({});
    const [editing, setEditing] = useState(false);
    var [reload, setReload] = useState(0);
    const [editor, setEditor] = useState(null);

    const navigate = useNavigate();

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
    
    var elems = document.querySelectorAll('.fixed-action-btn');
    var instances = M.FloatingActionButton.init(elems);

    const auth = useAuth();
    
    const changeVisibility = async () => {
        var data = new FormData();
        data.append('token', auth.user.token);
        data.append('user', auth.user.id);
        data.append('post', postId);
        data.append('visibility', ~parseInt(post.hidden));
        const response = await fetch('http://localhost/portfolio-backend/post/visibility.php', {
            method: 'POST',
            body: data
        })
        
        setReload(reload += 1);
    }

    const saveContent = async () => {
        var data = new FormData();
        data.append('token', auth.user.token);
        data.append('user', auth.user.id);
        if(newPost.image) data.append('image', newPost.image[0]);
        let objToSend = {
            text: newPost.text ? newPost.text : post.text,
            title: newPost.title ? newPost.title : post.title,
            subtitle: newPost.subtitle ? newPost.subtitle : post.subtitle
        }
        data.append('post', JSON.stringify(objToSend));
        data.forEach(z => console.log(z));
        const response = await fetch(`http://localhost/portfolio-backend/post/edit.php?post=${postId}`, {
            method: 'POST',
            body: data
        })
        setEditing(false);
        setReload(reload += 1);
        editor.destroy()
    }

    const editContent = () => {
        var edit = new MediumEditor('.editable');
        setEditor(edit);
        setEditing(true);
    }

    const deletePost = async () => {
        var data = new FormData();
        data.append('token', auth.user.token);
        data.append('user', auth.user.id);
        data.append('post', postId);
        const response = await fetch(`http://localhost/portfolio-backend/post/delete.php`, {
            method: 'POST',
            body: data
        })
        navigate('/posts', { replace: true });
    }

    const emptyFunction = () => {}

    return (
        <>
            <Hero image={post.image ? 'http://localhost/portfolio-backend/images/'+post.image :link_public('/bg_not_found.jpg')} title={post.title} subtitle={post.subtitle} btn={false} />
            <div className={!editing ? 'hidden' : 'col s3 center'}>
                <h2>Title: <input type='text' onChange={e => setNewPost({title: e.target.value, subtitle: newPost.subtitle, text: newPost.text, image: newPost.image})} value={newPost.title ? newPost.title : post.title}/></h2>
                <h3>Subtitle: <input type='text' onChange={ e => setNewPost({subtitle: e.target.value, title: newPost.title, text: newPost.text, image: newPost.image}) } value={newPost.subtitle ? newPost.subtitle : post.subtitle} /></h3>

                <div className="file-field input-field">
                    <div className="btn">
                        <span>Imagen</span>
                        <input type="file" onChange={ e => setNewPost({subtitle: newPost.subtitle, title: newPost.title, text: newPost.text, image: [...e.target.files]}) } />
                    </div>
                    <div className="file-path-wrapper">
                        <input className="file-path validate" type="text" />
                    </div>
                </div>
            <hr />
            </div>
            <article>
                <div className="row">
                    <div className="col s6 offset-s3 editable" dangerouslySetInnerHTML={{__html: post.text}} onInput={ e => setNewPost({text: e.target.innerHTML, subtitle: newPost.subtitle, title: newPost.title, image: newPost.image}) }>
                    </div>
                </div>
            </article>
            {
                auth.user ? (
                    <div className="fixed-action-btn">
                        <a className="btn-floating btn-large green" onClick={editing ? saveContent : emptyFunction}>
                            <i className="large material-icons">{editing ? 'save' : 'settings'}</i>
                        </a>
                        <ul style={editing ? {display:'none'} : {display:'block'}}>
                            <li><a className="btn-floating red" onClick={ deletePost }><i className="material-icons">delete</i></a></li>
                            <li><a className="btn-floating yellow darken-1" onClick={ editContent }><i className="material-icons">mode_edit</i></a></li>
                            <li><a className='btn-floating blue' onClick={ changeVisibility }><i className="material-icons">{ !parseInt(post.hidden) ? 'visibility' : 'visibility_off' }</i></a></li>
                        </ul>
                    </div>
                ) : ''
            }
        </>
    )
}

export default Post;