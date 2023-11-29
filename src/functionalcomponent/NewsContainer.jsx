import { useEffect, useState } from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import axios from "axios";

const NewsContainer = () => {
    const [newsData, setNewsData] = useState([]);
    const [searchInput, setSearchInput] = useState("");

    const searchNews = () => {
        let input = searchInput.toLowerCase();
        const link =  `https://newsapi.org/v2/everything?q=${input || "a"}&domains=wsj.com&apiKey=7b328877d534470483ca958f359d1037`;

        axios.get(link)
            .then((response) => {
                let {data} = response;
                setNewsData(data);
                data = data.articles;
                console.log(data)
            })

    }

    useEffect(() => {
        searchNews();
    }, []);

    useEffect(() => {
        if (searchInput) {
            searchNews();
        }
    }, [searchInput])

    return (
        <Container fluid>
            <Row>
                <Col>
                    <Form.Control 
                        placeholder="Cari Berita Di Sini" 
                        value={searchInput}
                        onChange={(e) => setSearchInput(e.target.value)} />
                </Col>
            </Row>
            <Row className="g-4 xs={1} md={3} mt-5 ">
               {
                newsData.map((data, index) => (
                    <Col key={index}>
                        <Card className="shadow-lg" style={{ height: "35rem" }}>
                            <Card.Img variant="top" src={data.urlToImage} />
                            <Card.Body>
                                <Card.Title>
                                    {data.title}
                                </Card.Title>
                                <Card.Text>
                                    {data.description}
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <span>
                                    {data.author} <br />
                                    {data.publishedAt} <br />
                                </span>
                                <a href={data.url}>
                                    <Button className="mt-3 mb-3" variant="primary">
                                        Baca Selengkapnya >>
                                    </Button>
                                </a>
                            </Card.Footer>
                        </Card>
                    </Col>
                ))
               }
            </Row>
        </Container>
    )
}

export default NewsContainer;