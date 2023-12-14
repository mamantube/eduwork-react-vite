// import Header from "./components/Header";
// import NewsContainer from "./functionalcomponent/NewsContainer"
// import NewsPortal from "./classcomponents/NewsPortal"
// import { Container, Nav, Navbar, Row,Col } from "react-bootstrap";
// import { Link, Outlet } from "react-router-dom";
// import "./assets/pagescss/App.css";
import Redux from "./redux";





function App() {
  

  return (
    // <Container fluid>
    //   <Navbar bg="dark" data-bs-theme="dark" expand="lg" className="bg-body-tertiary">
    //     <Row className="d-flex justify-content-between">
    //       <Col className="ms-4">
    //         <Navbar.Brand href="#home">MamanTube</Navbar.Brand>
    //       </Col>
    //       <Col>
    //         <Navbar.Toggle aria-controls="basic-navbar-nav" />
    //         <Navbar.Collapse id="basic-navbar-nav">
    //           <Nav className="me-auto">
    //             <button className="page-button">
    //               <Link to="/" className="text-decoration-none me-2 border-primary" >
    //                 <span>Home</span>
    //                 <span></span>
    //               </Link>
    //             </button>
    //             <button className="page-button">
    //               <Link to="/about" className="text-decoration-none me-2" >
    //                 <span>About</span>
    //                 <span></span>
    //               </Link>
    //             </button>
    //             <button className="page-button">
    //               <Link to="/project" className="text-decoration-none" >
    //                 <span>Project</span>
    //                 <span></span> 
    //               </Link>
    //             </button>
    //           </Nav>
    //         </Navbar.Collapse>
    //       </Col>
    //     </Row>
    // </Navbar>
    //   <Outlet />
    // </Container>
    <div>
      <Redux />
    </div>
  )
}

export default App
