import { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row, Col, Form, Card, Button } from 'react-bootstrap';

const NewsContainer = () => {
  const [newsData, setNewsData] = useState([]);
  const [searchInput, setSearchInput] = useState('');

  
  useEffect(() => {
    newsSearch();
  }, []); 

  const newsSearch = () => {
    let input = searchInput.toLowerCase();
    const link = `https://newsapi.org/v2/everything?q=${input || "a"}&domains=wsj.com&apiKey=7b328877d534470483ca958f359d1037`;

    axios.get(link)
      .then((response) => {
        let { data } = response;
        data = data.articles;
        setNewsData(data);
      });
  };

  return (
    <Container fluid>
        <Row className="card-row">
            <Col className="ps-6 col-lg-7" style={{ paddingLeft: "35%"}}>        
               <Form.Control className="mb-3 mt-3 opacity-100" placeholder="Cari Berita Di Sini"  value={searchInput} onChange={(e) => setSearchInput(e.target.value)}/>  
            </Col>
            <Col>
                <Button className="mb-3 mt-3" variant="secondary" onClick={newsSearch}>Cari</Button>
            </Col>
        </Row>
        <Row xs={1} md={3} className="g-4 mt-5">
          {newsData.map((data, index) => 
            <Col className="cards" key={index}>
              <Card className="card-item" style={{ height: "35rem"}}>
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
                  {data.author} <br />
                  {data.publishedAt} <br />
                  <a href={data.url} target="_blank">
                    <Button className="mt-3 mb-2" variant="primary">Baca Selengkapnya >> </Button>
                  </a>
                </Card.Footer>

              </Card>
            </Col>)}
        </Row>      
    </Container>
  );
};

export default NewsContainer;
