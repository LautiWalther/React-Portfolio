import M from "materialize-css";
import './Home.css';
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

function Home() {

    document.addEventListener('DOMContentLoaded', function() {
        var elems = document.querySelectorAll('.slider');
        var instances = M.Slider.init(elems, {
            height: 500,
            indicators: false
        });
    });
    return (
        <>
            <div class="hero-image">
                <div class="hero-text">
                    <h1>Lautaro Walther</h1>
                    <p class='flow-text'>Junior React Developer</p>
                    <Link to='/contact' class='btn blue-grey lighten-5 black-text waves-effect' style={{'fontWeight': 'bold'}}>Talk with Me</Link>
                </div>
            </div>
            <hr />
            <div class="row container">
                <div class="col s4">
                    <img src={'http://' + window.location.host + '/yo.jpg'} class="my_image" alt="" />
                </div>
                <div class="col s8">
                    <p class="history-text">Mi nombre es Lautaro Walther y tengo 19 años. Me considero un chico ambicioso, apasionado por la informatica y la educación.</p>
                    <p class="history-text">Mi historia en cuanto a la informatica orientada a la programacion comienza a los 16 años, ya que, a los 15 años estuve enfocado en cuanto al hacking, seguridad informatica, aunque mi pasion por la tecnologia viene desde pequeño.</p>
                    <p class="history-text">En Noviembre del 2019, decidi unirme a una plataforma llamada Discord, donde comencé a conocer gente nueva y a jugar. Pasado unos meses de estar en esta plataforma, se me ocurrió dar un paso mas grande y programar un BOT para esta aplicación. Comencé a investigar, a leer, a profundizarme mas en el tema, y cree mi primer BOT para Discord. (LovelyBot | RP)</p>
                    <p class="history-text">El BOT llego a estar en +4000 servidores, pero por falta de tiempo tuve que darle de baja el 20 de septiembre de 2021.</p>
                    <p class="history-text">Actualmente estoy estudiando Ingeniería en Sistemas de Información, mientras aprendo y estudio nuevas tecnologías.</p>
                    <p class="history-text">Mi objetivo es impactar de manera beneficiosa en la gente, actualizando su estilo de vida y mejorando potencialmente sus habilidades de manejar la tecnologia. ¿Te sumas?</p>
                </div>
            </div>
            <Footer></Footer>
        </>
    )
}

export default Home;