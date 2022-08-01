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
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#212529" fill-opacity="1" d="M0,224L13.3,218.7C26.7,213,53,203,80,213.3C106.7,224,133,256,160,245.3C186.7,235,213,181,240,176C266.7,171,293,213,320,234.7C346.7,256,373,256,400,229.3C426.7,203,453,149,480,112C506.7,75,533,53,560,53.3C586.7,53,613,75,640,106.7C666.7,139,693,181,720,197.3C746.7,213,773,203,800,181.3C826.7,160,853,128,880,144C906.7,160,933,224,960,229.3C986.7,235,1013,181,1040,149.3C1066.7,117,1093,107,1120,117.3C1146.7,128,1173,160,1200,154.7C1226.7,149,1253,107,1280,101.3C1306.7,96,1333,128,1360,165.3C1386.7,203,1413,245,1427,266.7L1440,288L1440,320L1426.7,320C1413.3,320,1387,320,1360,320C1333.3,320,1307,320,1280,320C1253.3,320,1227,320,1200,320C1173.3,320,1147,320,1120,320C1093.3,320,1067,320,1040,320C1013.3,320,987,320,960,320C933.3,320,907,320,880,320C853.3,320,827,320,800,320C773.3,320,747,320,720,320C693.3,320,667,320,640,320C613.3,320,587,320,560,320C533.3,320,507,320,480,320C453.3,320,427,320,400,320C373.3,320,347,320,320,320C293.3,320,267,320,240,320C213.3,320,187,320,160,320C133.3,320,107,320,80,320C53.3,320,27,320,13,320L0,320Z"></path></svg>
            <Footer></Footer>
        </>
    )
}

export default Home;