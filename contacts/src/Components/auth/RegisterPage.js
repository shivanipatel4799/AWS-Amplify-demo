import Container from "react-bootstrap/esm/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import  Button  from "react-bootstrap/Button";

 function RegisterPage() {
  return (
    <Container>
    <Row className="px-4 my-5">
        <Col><h1>Register</h1></Col>
    </Row>
    <Row className="px-4 my-5">
        <Col sm={6}>
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email Address</Form.Label>
                <Form.Control type="email" placeholder="Enter Email"/>
                <Form.Text className="text-muted">
                    We'll never share your email!
                </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>PassWord</Form.Label>
                <Form.Control type="password" minLength={8} placeholder="Enter Password"/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formConfirm">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control type="password" minLength={8} placeholder="Comfirm Password"/>
            </Form.Group>

            <Button variant="primary" type="submit">Register &gt;&gt;</Button>&nbsp;
        </Form>
        </Col>
    </Row>
   </Container>
  )
}

export default RegisterPage;