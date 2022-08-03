import './css/Footer.css';

function Footer() {
    return (
        <footer id="footer" class='center'>
            <div class="container">
                <div class="row d-flex justify-content-center">
                    <div class="col-md-10">
                        <ul class="list-inline text-center">
                            <li class="list-inline-item">
                                <a target="_blank" href="https://www.instagram.com/lautiwalther">
                                    
                                    <span class="fa-stack fa-lg">
                                        <i class="instagram fa fa-circle fa-stack-2x instagram"></i>
                                        <i class="fa-brands fa-instagram fa-stack-1x fa-inverse"></i>
                                    </span>
                                </a>
                            </li>
                            <li class="list-inline-item">
                                <a target="_blank" href="https://wa.me/5493516768555">
                                    <span class="fa-stack fa-lg">
                                        <i class="fa fa-circle fa-stack-2x whatsapp"></i>
                                        <i class="fa-brands fa-whatsapp fa-stack-1x fa-inverse"></i>
                                    </span>
                                </a>
                            </li>
                            <li class="list-inline-item">
                                <a target="_blank" href="https://www.facebook.com/lauti.walther">
                                    <span class="fa-stack fa-lg">
                                        <i class="facebook fa fa-circle fa-stack-2x"></i>
                                        <i class="fa-brands fa-facebook-f fa-stack-1x fa-inverse"></i>
                                    </span>
                                </a>
                            </li>
                            <li class="list-inline-item">
                                <a target="_blank" href="mailto:lautarowalther@gmail.com">
                                    <span class="fa-stack fa-lg">
                                        <i class="gmail fa fa-circle fa-stack-2x"></i>
                                        <i class="fa-solid fa-at fa-stack-1x fa-inverse"></i>
                                    </span>
                                </a>
                            </li>
                            <li class="list-inline-item">
                                <a target="_blank" href="https://t.me/Lauti_Walther">
                                    <span class="fa-stack fa-lg">
                                        <i class="telegram fa fa-circle fa-stack-2x"></i>
                                        <i class="fa-brands fa-telegram fa-stack-1x fa-inverse"></i>
                                    </span>
                                </a>
                            </li>
                        </ul>
                        <p class="text-muted copyright">Copyright&nbsp;©&nbsp;2019 - 2022 | <a class="copy_name">Lautaro Walther</a></p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;