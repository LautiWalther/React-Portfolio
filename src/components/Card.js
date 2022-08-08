import M from "materialize-css";
import { useAuth } from "./auth";
import link_public from "./public";

export default function Card(props) {
    const auth = useAuth();

    return (
        <div className="card col s3">
            <div className="card-image waves-effect waves-block waves-light">
                <img className="activator" src={props.image ? link_public(props.image) : link_public('/default_project.png')} />
            </div>
            <div className="card-content">
                <span className="card-title activator grey-text text-darken-4">{props.title}<i className="material-icons right">more_vert</i></span>
                <p><a href={props.link}>Ver Más</a>{auth.user ? <a className="right"><i className="material-icons red white-text rounded">edit</i></a> : ''}</p>
            </div>
            <div className="card-reveal">
                <span className="card-title grey-text text-darken-4">{props.title}<i className="material-icons right">close</i></span>
                <p>{props.description}</p>
            </div>
        </div>
    )
}