import M from "materialize-css";
import './Home.css';
import Hero from "../components/Hero";
import link_public from '../components/public';

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
            <Hero image={ link_public('/home_bg_my.jpg') } title='Lautaro Walther' subtitle='Junior React Developer' btn="Let's Talk!"></Hero>
            <hr />
            <div class="row container">
                <div class="col s4">
                    <img src={ link_public('/yo.jpg') } class="my_image" alt="" />
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
        </>
    )
}

export default Home;