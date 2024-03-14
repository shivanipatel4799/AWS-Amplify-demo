import Container from "react-bootstrap/esm/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'
import Button  from 'react-bootstrap/Button';

function HomePage   () {
    return(
        <Container>
            <Row className="px-4 my-5">
                <Col xs={4} sm={6}>
                    <Image src="/img/logo.svg" fluid roundedCircle/>
                </Col>
                <Col sm={6}>
                    <h1 className="font-weight-light">Contacts App</h1>
                    <p className="mt-4">
                        Shivani Patel
                        <br></br>
                        <br></br>
                        “A strong woman has an awareness of the obstacles in her way and the misogynistic expectations people have for her, but she decides for herself what she wants and works to achieve it. Furthermore, a strong woman is willing to find help or gain strength from supportive friends, family members, and mentors–despite the notion that women should be ‘independent’ and ‘do it all.'”
                        </p>
                        <Button variant="outline-primary">Get Started &gt;&gt;</Button>
                </Col>
            </Row>
        </Container>
    )
}

export default HomePage;