import './css/Footer.css';

function Footer() {
    return (
        <footer id="footer" className='center'>
            <div className="container">
                <div className="row d-flex justify-content-center">
                    <div className="col-md-10">
                        <ul className="list-inline text-center">
                            <li className="list-inline-item">
                                <a target="_blank" href="https://www.instagram.com/lautiwalther">
                                    
                                    <span className="fa-stack fa-lg">
                                        <i className="instagram fa fa-circle fa-stack-2x instagram"></i>
                                        <i className="fa-brands fa-instagram fa-stack-1x fa-inverse"></i>
                                    </span>
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <a target="_blank" href="https://wa.me/5493516768555">
                                    <span className="fa-stack fa-lg">
                                        <i className="fa fa-circle fa-stack-2x whatsapp"></i>
                                        <i className="fa-brands fa-whatsapp fa-stack-1x fa-inverse"></i>
                                    </span>
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <a target="_blank" href="https://www.facebook.com/lauti.walther">
                                    <span className="fa-stack fa-lg">
                                        <i className="facebook fa fa-circle fa-stack-2x"></i>
                                        <i className="fa-brands fa-facebook-f fa-stack-1x fa-inverse"></i>
                                    </span>
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <a target="_blank" href="mailto:lautarowalther@gmail.com">
                                    <span className="fa-stack fa-lg">
                                        <i className="gmail fa fa-circle fa-stack-2x"></i>
                                        <i className="fa-solid fa-at fa-stack-1x fa-inverse"></i>
                                    </span>
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <a target="_blank" href="https://t.me/Lauti_Walther">
                                    <span className="fa-stack fa-lg">
                                        <i className="telegram fa fa-circle fa-stack-2x"></i>
                                        <i className="fa-brands fa-telegram fa-stack-1x fa-inverse"></i>
                                    </span>
                                </a>
                            </li>
                        </ul>
                        <p className="text-muted copyright">Copyright&nbsp;©&nbsp;2019 - 2022 | <a className="copy_name">Lautaro Walther</a></p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;