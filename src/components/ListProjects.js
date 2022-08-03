import Hero from "./Hero";
import link_public from "./public";
import M from "materialize-css";
import Card from "./Card";

function ListProjects() {
    let list = [{
        title: 'Iconsa Web',
        description: 'A webpage for a constructing enterprise',
        link: 'http://iconsa.com.ar',
        image: ''
    },{
        title: 'Consorces',
        description: 'A web system for consortium management, where you can upload and edit expenses, and upload news for each consortium.',
        link: 'http://31.220.20.175:8080/',
        image: ''
    },{
        title: 'Discord Bot List',
        description: `A Discord's bots list, where you can upload your bots.
        I developed this project to upgrade my full-stack skills. (still on development)`,
        link: 'https://github.com/LautiWalther/BotListProject',
        image: ''
    }]
    return (
        <>
            <Hero image={ link_public('/portfolio.jpg') } title='Portfolio' subtitle='' btn={false}></Hero>

            <div class='row'>
                {
                    list.map(project => {
                        return (
                            <Card image={project.image} title={project.title} link={project.link} description={project.description}></Card>
                        )
                    })
                }
            </div>
        </>
    )
}

export default ListProjects;