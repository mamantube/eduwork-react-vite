import { Col, Container, Row } from "react-bootstrap";
import { Slide } from "react-awesome-reveal";

const About = () => {
    return (
        <Slide left>
            <Container fluid>
                <Row className="bg-transparent">
                    <Col className="text-white"><h1>ini Kolom Pertama</h1></Col>
                    <Col className="text-white"><h1>Ini Kolom Kedua</h1></Col>
                </Row>
            </Container>
        </Slide>
    )
}

export default About;