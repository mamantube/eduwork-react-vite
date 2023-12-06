import { Bounce, Fade } from "react-awesome-reveal";
import { Container, Row, Col, Card} from "react-bootstrap";
import Image from "../ImageUrl"

const Project = () => {
    return (
        <Container fluid>
            <Fade>
                <Row className="project-line">
                    <Col><h3 className="project-head">MY PROJECT</h3></Col>
                </Row>
            </Fade>
            <Bounce>
                <Row xs={1} md={2} className="g-4">
                    {Image.map((data, index) => (
                        <Col  className="cards" key={index}>
                        <Card className="card-item text-white" border="secondary" style={{ backgroundColor: "#066d89"}}>
                            <Card.Img variant="top" src={data.url} style={{height: "70%"}} />
                            <Card.Body>
                            <Card.Title>{data.cardTitle}</Card.Title>
                            <Card.Text>
                                {data.cardText}
                            </Card.Text>
                            </Card.Body>
                        </Card>
                        </Col>
                    ))}
                </Row>
            </Bounce>
        </Container>
    )
}

export default Project;