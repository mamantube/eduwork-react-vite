import { Component } from "react";
import axios from "axios";
import { Container, Row, Col, Button, Form, Card,} from "react-bootstrap"

class NewsPortal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newsData: [],
            searchInput: ""
        };
    }

    newsSearch = () => {
        let input = this.state.searchInput.toLocaleLowerCase();
        const link = `https://newsapi.org/v2/everything?q=${input || "a"}&domains=wsj.com&apiKey=7b328877d534470483ca958f359d1037`;

        axios.get(link)
            .then((response) => {
                let {data} = response;
                data = data.articles;
                this.setState({ newsData: data})
                console.log(data)
            })
    }

    componentDidMount() {
        this.newsSearch()
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.searchInput !== this.state.searchInput) {
            this.newsSearch();
        }
    }

    componentWillUnmount() {

    }
    render() {
        return (
            <Container fluid>
                <Row>
                    <Col className="input-search" md={{ span: 6, offset: 3 }}>
                        <Form.Control placeholder="Cari Berita Di sini" value={this.state.searchInput} onChange={(e) => this.setState({ searchInput: e.target.value })} />
                    </Col>
                </Row>
                <Row className="g-4" xs={1} md={3} className="g-4 mt-5">
                    {
                        this.state.newsData.map((data, index) => (
                            <Col key={index}>
                                <Card className="shadow-lg" style={{ height: "35rem"}}>
                                    <Card.Img variant="top" src={data.urlToImage}/>
                                    <Card.Body>
                                        <Card.Title>
                                            {data.title}
                                        </Card.Title>
                                        <Card.Text>
                                            {data.description}
                                        </Card.Text>
                                    </Card.Body>
                                    <Card.Footer>
                                        <span className="fst-italic">
                                            {data.author} <br />
                                            {data.publishedAt} <br />
                                        </span>
                                        <a href={data.url} target="_blank">
                                            <Button  className="mt-3 mb-3" variant="primary">Baca Selengkapnya >> </Button>
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
}

export default NewsPortal;