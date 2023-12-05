import { Col, Container, Row } from "react-bootstrap";
import { Slide } from "react-awesome-reveal";

const About = () => {
    return (
        <Container fluid>
            <Row className="bg-transparent">
                <Col className="text-white">
                    <Slide direction="left">
                        <h1>ini Kolom Pertama</h1>
                    </Slide>
                </Col>
                <Col className="text-white">
                    <Slide direction="right">
                        <h1>Ini Kolom Kedua</h1>
                    </Slide>
                </Col>
            </Row>
        </Container>

    )
}

export default About;