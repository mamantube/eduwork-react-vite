import { Col, Container, Row } from "react-bootstrap";
import { Slide, Fade } from "react-awesome-reveal";
import myPict from "../assets/img/mypict.png"

const About = () => {
    return (
        <Container fluid>
            <Row>
                <Col className="text-white text-center" style={{ marginTop: "5%"}}>
                    <Fade>
                        <h1>Know Who I'M</h1>
                    </Fade>
                </Col>
            </Row>
            <div style={{ backgroundImage: `url(${myPict})`, backgroundSize: "100%", backgroundRepeat: "no-repeat", height: "100vh", backgroundPositionX: "-10vw"}}>
                <Row>
                    <Col className="text-white">
                        <Slide direction="left">
                            
                        </Slide>
                    </Col>
                    <Col className="text-white" style={{ paddingTop: "10%"}}>
                        <Slide direction="right">
                        <p>
                            Hi Everione, I am Muhammad Firman Hidayat from Jakarta, Indonesia. <br />
                            I'm usually called MAMAN. I am currently working in the field of website developers Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum fugiat tenetur, quod adipisci aspernatur necessitatibus pariatur doloremque ea iure quas fugit praesentium velit ipsum, eius architecto earum quae ut nam in ipsa debitis. Illum accusamus, at iusto placeat libero alias ex excepturi, velit cupiditate tenetur eaque inventore nemo, saepe fugiat pariatur! Minus eaque id doloribus porro facere. Quaerat exercitationem perspiciatis repellat molestias assumenda inventore dignissimos laborum, nulla libero quam harum numquam quibusdam, nisi mollitia at nostrum, aliquam sunt soluta quisquam adipisci officiis voluptatibus. Quod asperiores dolores aut placeat esse! Commodi aliquam delectus accusantium. Libero, quam laudantium deserunt distinctio aliquam ea.
                        </p>
                        </Slide>
                    </Col>
                </Row>
            </div>
        </Container>

    )
}

export default About;