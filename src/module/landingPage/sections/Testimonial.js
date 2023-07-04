import {Container, Row, Col} from "reactstrap";

export default function Testimonial(){
    return(
        <section id="testimonial" className="hidden">
            <Container fluid className="container-fluid">
                <Row className="row">
                    <Col md="12" className="col-md-12 text-center">
                        <h3 className="testimonial-title text-capitalize">testimonial</h3>
                        <p className="testimonial-text">
                            Berbagai review positif dari pelanggan kami
                        </p>
                    </Col>
                </Row>
                <Row className="row">
                    <div className="wrapper-testimonial mt-4">
                        <TestimonialContent
                            text='“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”'
                            detail="john dee 32, bromo" />
                        <TestimonialContent
                            text='“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”'
                            detail="john dee 32, bromo" />
                        <TestimonialContent
                            text='“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”'
                            detail="john dee 32, bromo" />
                    </div>
                </Row>
                <Row className="row testimonial-btn justify-content-center">
                    <Col md="12" className="col-md-12 text-center">
                        <img src="/img/Left button.svg" className="left-button" alt="" srcSet=""/>
                        <img src="/img/Left button.svg" className="rigth-button" alt="" srcSet=""/>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

function TestimonialContent({text, detail}){
    return (
        <div className="testimonial-item">
            <div className="testimonial-card d-md-flex align-items-center">
                <img src="/img/testimonial_img_photo.png" alt="" className=""/>
                <div className="testimonial-content">
                    <img src="/img/Rate.svg" className="m-0 p-0" alt=""/>
                    <p className="testimonial-content-text text-sm-start fw-bold">
                        {text}
                    </p>
                    <p className="testimonial-content-name text-capitalize text-sm-start">
                        {detail}
                    </p>
                </div>
            </div>
        </div>
    )
}