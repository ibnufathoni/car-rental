export default function Footer() {
    return (
        <section id="footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-3 fw-bold">
                        <p>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
                        <p>binarcarrental@gmail.com</p>
                        <p>081-233-334-808</p>
                    </div>
                    <div className="col-md-3 justify-content-center">
                        <p>Our services</p>
                        <p>Why Us</p>
                        <p>Testimonial</p>
                        <p>FAQ</p>
                    </div>
                    <div className="col-md-3">
                        <p className="fw-bold">Connect with us</p>
                        <ul className="list-unstyled d-flex">
                            <li>
                                <a href="src/components/footer/Footer">
                                    <img src="/img/icon_facebook.svg" alt=""/>
                                </a>
                            </li>
                            <li>
                                <a href="src/components/footer/Footer">
                                    <img src="/img/icon_twitch.svg" alt=""/>
                                </a>
                            </li>
                            <li>
                                <a href="src/components/footer/Footer">
                                    <img src="/img/icon_instagram.svg" alt=""/>
                                </a>
                            </li>
                            <li>
                                <a href="src/components/footer/Footer">
                                    <img src="/img/icon_mail.svg" alt=""/>
                                </a>
                            </li>
                            <li>
                                <a href="src/components/footer/Footer">
                                    <img src="/img/icon_twitch.svg" alt=""/>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <p className="fw-bold">Copyright Binar 2022</p>
                        <a href="src/components/footer/Footer">
                            <img src="/img/footer-logo.svg" className="img-fluid" alt="BCR logo" srcSet=""/>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}