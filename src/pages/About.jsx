import { Col, Container, Row } from "react-bootstrap";
import { Slide, Fade } from "react-awesome-reveal";
import myPict from "../assets/img/mypict.png"
import { FaRegHandPointRight } from "react-icons/fa6"
import { DiBootstrap, DiCss3, DiJavascript1, DiMongodb, DiMysql, DiReact } from "react-icons/di"

const About = () => {
    return (
        <Container fluid>
            <Row>
                <Col className="text-white text-center" style={{ marginTop: "5%"}}>
                    <Fade>
                        <h1 className="about-head">Know Who <span>I'M</span></h1>
                    </Fade>
                </Col>
            </Row>
            <div style={{ backgroundImage: `url(${myPict})`, backgroundSize: "100%", backgroundRepeat: "no-repeat", height: "100vh", backgroundPositionX: "-10vw"}}>
                <Row>
                    <Col className="text-white">
                        <Slide direction="left">
                            
                        </Slide>
                    </Col>
                    <Col className="text-white text-justify pe-5" style={{ paddingTop: "10%"}}>
                        <Slide direction="right">
                        <p>
                            Hi Everione, I am Muhammad Firman Hidayat from Jakarta, Indonesia. <br />
                            I'm usually called MAMAN. I work as a freelance employee by working on various projects related to website development.
                        </p>
                        <Row>
                            <Col>
                                <p>Apart from coding, some other activities that I love to do!</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="ps-5">
                                <p>
                                    <FaRegHandPointRight /> Playing Games
                                </p>
                                <p>
                                    <FaRegHandPointRight /> reading a book
                                </p>
                                <p>
                                    <FaRegHandPointRight /> playing musical instruments
                                </p>
                            </Col>
                        </Row>
                        </Slide>
                        <Fade delay={1300}>
                            <Row className="text-center mt-4">
                                <Col><h3>Profesional Skillset</h3></Col>
                            </Row>
                            <Row>
                                <Col xs={4} md={3} className="tech-icons">
                                    <DiReact />
                                </Col>
                                <Col xs={4} md={3} className="tech-icons">
                                    <DiJavascript1 />
                                </Col>
                                <Col xs={4} md={3} className="tech-icons">
                                    <DiCss3 />
                                </Col>
                                <Col xs={4} md={3} className="tech-icons">
                                    <DiMongodb />
                                </Col>
                                <Col xs={4} md={3} className="tech-icons">
                                    <DiMysql />
                                </Col>
                                <Col xs={4} md={3} className="tech-icons">
                                    <DiBootstrap />
                                </Col>
                            </Row>
                        </Fade>
                    </Col>
                </Row>
            </div>
        </Container>

    )
}

export default About;