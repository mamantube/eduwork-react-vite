import { Container, Row, Col } from "react-bootstrap";

const Header = () => {
    return (
        <Container fluid className="text-center pt-5">
            <Row>
                <Col>
                    <h1 className="mb-4">Maman News</h1>
                </Col>
            </Row>
        </Container>
        

    )
}

export default Header;