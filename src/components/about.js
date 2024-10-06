import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import img1 from "../assets/images/img1.jpg";
import ProgressBar from 'react-bootstrap/ProgressBar';
export default function AppAbout() {
    const html = 80;
    const responsive =95;
    const photograph =60;
  return (
    <section id="about" className="block about-block">
      <Container fluid>
        <div className="title-holder">
          <h2>About Us</h2>
          <div className="subtitle">learn more about us.</div>
        </div>
        <Row>
          <Col sm={6}>
            <Image src={img1} />
          </Col>
          <Col sm={6}>
            <p>Welcome to Your Digital Solution Hub, your go-to platform for professional online services including custom website development, web design, and SEO optimization. We specialize in building user-friendly, responsive websites that help businesses establish a strong online presence. Our services also include creative web design tailored to enhance user experience, expert SEO strategies to boost your search engine rankings, and ongoing website maintenance to ensure peak performance. Whether you're starting from scratch or looking to revamp your digital strategy, we're here to deliver top-notch solutions that drive growth and success.</p> 
            <div className="progress-block">
                <h4>HTML / CSS / Javascript</h4>
            <ProgressBar now={html} label={`${html}%`} />
            </div>
            <div className="progress-block">
                <h4>RESPONSIVE</h4>
            <ProgressBar now={responsive } label={`${responsive }%`} />
            </div>
            <div className="progress-block">
                <h4>PHOTOSHOP</h4>
            <ProgressBar now={photograph} label={`${photograph}%`} />
            </div>
          </Col>

        </Row>
      </Container>
    </section>
  );
}
