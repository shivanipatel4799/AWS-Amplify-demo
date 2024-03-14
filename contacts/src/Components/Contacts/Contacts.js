import Container from "react-bootstrap/esm/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card'


function Contacts(){
    return(
        <Container>
            <Row className="px-4 my-5">
                <Col>
                <h1>Contacts</h1>
                </Col>
            </Row>
            <Row>
                <Col className="px-3 my-2">
                    <Card style={{width:'12rem'}}>
                        <Card.Img src="/img/download.png" variant="top">
                            <Card.Body>
                                <Card.Title>Scary Calrson</Card.Title>
                                <Card.Text>stacy@test.com
                                    <br></br>555.123.4567
                                </Card.Text>
                            </Card.Body>
                        </Card.Img>
                    </Card>
                </Col>

            </Row>
        </Container>
    )
}
export default Contacts;