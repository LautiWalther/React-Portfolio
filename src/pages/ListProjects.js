import Hero from "../components/Hero";
import link_public from "../components/public";
import M from "materialize-css";
import Card from "../components/Card";
import { useEffect, useState } from "react";

function ListProjects() {
    const [list, setList] = useState([]);
    const [reload, setReload] = useState(0);

    useEffect(() => {
        var fetched = false;

        const fetchProjects = async () => {
            const response = await fetch('http://localhost/portfolio-backend/project/read.php');
            const json = await response.json();

            if(!fetched) {
                if(json.error){
                    alert(json.error);
                }else {
                    setList(json);
                }
            }

        }

        fetchProjects();


        return () => fetched = true;
    }, [reload]);

    return (
        <>
            <Hero image={ link_public('/portfolio.jpg') } title='Portfolio' subtitle='' btn={false}></Hero>

            <div className='row'>
                {
                    list.map(project => {
                        return (
                            <Card image={project.image} title={project.title} link={project.link} description={project.description} key={project.id} id={project.id} />
                        )
                    })
                }
            </div>
        </>
    )
}

export default ListProjects;