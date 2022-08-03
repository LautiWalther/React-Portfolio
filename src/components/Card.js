import M from "materialize-css";
import link_public from "./public";

export default function Card(props) {


    return (
        <div class="card col s3">
            <div class="card-image waves-effect waves-block waves-light">
                <img class="activator" src={props.image ? link_public(props.image) : link_public('/default_project.png')} />
            </div>
            <div class="card-content">
                <span class="card-title activator grey-text text-darken-4">{props.title}<i class="material-icons right">more_vert</i></span>
                <p><a href={props.link}>Ver Más</a></p>
            </div>
            <div class="card-reveal">
                <span class="card-title grey-text text-darken-4">{props.title}<i class="material-icons right">close</i></span>
                <p>{props.description}</p>
            </div>
        </div>
    )
}