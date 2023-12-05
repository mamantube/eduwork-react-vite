import { Col, Container, Row } from "react-bootstrap";
import programmer from "../assets/img/programmer.png"
import { Fade } from "react-awesome-reveal";
import githubLogo from "../assets/img/github-logo.png";
import youtubeLogo from "../assets/img/youtube-logo.png";
import linkedinLogo from "../assets/img/linkedin-logo.png";
import instagramLogo from "../assets/img/instagram-logo.png";
import facebookLogo from "../assets/img/facebook-logo.png";
import gmailLogo from "../assets/img/gmail-logo.png";

const Home = () => {
    return (
        <Fade duration={2500} className="d-flex">
            <Container fluid style={{ marginTop: "10%"}}>
                <Row>
                    <Col className="text-white">
                        <h1>Hi There!!</h1>
                        <h1>I'm Muhammad Firman Hidayat</h1>
                        <h3>(MamanTube)</h3>
                        <p>A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.</p>
                        <div className="border border-3 border-dark rounded-pill" style={{ marginRight: "31%"}}>
                            <div className="ps-2 pt-2 pb-2 bg-white rounded-pill">
                                <a href="https://github.com/mamantube" target="_blank"><img src={githubLogo} style={{ height: "60px"}} alt="" /></a>
                                <a href="https://www.youtube.com/channel/UCaKHLfNcnPTpXi19IbU-IRQ" target="_blank" target="_blank"><img src={youtubeLogo} style={{ height: "60px", marginLeft: "10px"}} alt="" /></a>
                                <a href="https://www.linkedin.com/in/muhammad-firman-hidayat-7a5293209/" target="_blank" target="_blank"><img src={linkedinLogo} style={{ height: "60px", marginLeft: "10px"}} alt="" /></a>
                                <a href="https://www.instagram.com/firman_dy07/" target="_blank" target="_blank"><img src={instagramLogo} style={{ height: "60px", marginLeft: "10px"}} alt="" /></a>
                                <a href="https://www.facebook.com/m.hidayat.18" target="_blank" target="_blank"><img src={facebookLogo} style={{ height: "60px", marginLeft: "10px"}} alt="" /></a>
                                <a href="mailto:firmanhiday.id007@gmail.com" target="_blank" target="_blank"><img src={gmailLogo} style={{ height: "50px", marginLeft: "10px"}} alt="" /></a>
                            </div>
                        </div>
                    </Col>
                    <Col calssName="text-white">
                        <img src={programmer} style={{ height: "450px"}} alt="" />
                    </Col>
                </Row>
            </Container>
        </Fade>
    )
}

export default Home;