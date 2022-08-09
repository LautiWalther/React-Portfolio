import M from "materialize-css";
import { useState } from "react";
import { useAuth } from "./auth";
import link_public from "./public";

export default function Card(props) {
    const [editing, setEditing] = useState(false);
    const [newImage, setNewImage] = useState(false);
    const [newCard, setNewCard] = useState({});
    const [deleted, setDeleted] = useState(false);
    const auth = useAuth();

    const styles = {
        rounded: {
            borderRadius: '50%',
            padding: '5px',
            cursor: 'pointer'
        }
    }

    const editCard = () => {
        setEditing(true);
    }

    const saveCard = async () => {
        var data = new FormData();
        let project_to_send = {
            title: newCard.title || props.title,
            description: newCard.description || props.description,
            link: newCard.link || props.link
        }
        data.append('project', JSON.stringify(project_to_send));
        data.append('image', newCard.image);
        data.append('projectID', props.id);
        data.append('token', auth.user.token);
        data.append('user', auth.user.id);
        const response = await fetch('http://localhost/portfolio-backend/project/edit.php', {
            method: 'POST',
            body: data
        });
        const json = await response.json();
        setEditing(false);
    }

    const deleteCard = async () => {
        var data = new FormData();
        data.append('project', props.id);
        data.append('token', auth.user.token);
        data.append('user', auth.user.id);
        const response = await fetch('http://localhost/portfolio-backend/project/delete.php', {
            method: 'POST',
            body: data
        })
        const json = await response.json();
        setDeleted(true);
    }

    return (
        <div className="card col s3" style={deleted ? {display:'none'} : {}}>
            <div className="card-image waves-effect waves-block waves-light">
                <label htmlFor={editing ? 'image-'+props.id : ''}><img className="activator" src={newImage ? newImage : props.image ? 'http://localhost/portfolio-backend/images/'+props.image : link_public('/default_project.png')} /></label>
                <input accept="image/png, image/jpg, image/jpeg" type="file" id={'image-'+props.id} style={{display: 'none'}} onChange={e => {
                    let file = e.target.files[0];
                    let reader = new FileReader();
                    let url = reader.readAsDataURL(file);
                    reader.onloadend = (e) => {
                        setNewImage(reader.result);
                        setNewCard({...newCard, image: file});
                    }
                }} />
            </div>
            <div className="card-content">
                <span className="card-title grey-text text-darken-4"><span contentEditable={editing ? true : false} onChange={e => setNewCard({...newCard, title: e.target.value})}>{newCard.title ? newCard.title : props.title}</span><i style={{cursor: 'pointer'}} className="activator material-icons right">more_vert</i></span>
                <p>
                    <a href={newCard.link ? newCard.link : props.link} contentEditable={editing ? true : false} onChange={e => setNewCard({...newCard, title: e.target.value})}>{editing ? props.link : 'Ver Más'}</a>
                    {auth.user ? <i className="material-icons teal darken-2 white-text right" style={styles.rounded} onClick={ editing ? saveCard : editCard }>{editing ? 'save' : 'edit'}</i> : ''}
                    {auth.user && editing ? <i className="material-icons red white-text right" style={styles.rounded} onClick={ deleteCard }>delete</i> : ''}
                </p>
            </div>
            <div className="card-reveal">
                <span className="card-title grey-text text-darken-4">{newCard.title ? newCard.title : props.title}<i className="material-icons right">close</i></span>
                <p contentEditable={editing ? true : false} onChange={e => setNewCard({...newCard, description: e.target.value})}>{newCard.description ? newCard.description : props.description}</p>
            </div>
        </div>
    )
}