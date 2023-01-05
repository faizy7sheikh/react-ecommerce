import React from "react";
import { Button,Row,Col,Container,Card, Form } from "react-bootstrap";
import { NavLink } from "react-router-dom";

function Login(){
    return(
        <>
            <div className="col-md-8 sm-12 offset-3 my-4">
                <Container>
                    <Card>
                        <Card.Body>
                            <Row>
                                <Col className="md-6">
                                    {/* first column */}
                                    <Row><h4>Sign In To Ecommerce</h4></Row>
                                    <Row className="mt-4">
                                        <Form>
                                           
                                            <Form.Group className="my-3">
                                                <Form.Label>*Email</Form.Label>
                                                <Form.Control placeholder="test@gmail.com" muted></Form.Control>
                                            </Form.Group>
                                            <Form.Group className="my-3">
                                                <Form.Label>*Password</Form.Label>
                                                <Form.Control placeholder="******" muted></Form.Control>
                                            </Form.Group>
                                            <a href="">Forget password ?</a>
                                            <Button style={{ marginLeft: 200 }} variant="primary" size="lg">Sign Up</Button>
                                        </Form>
                                    </Row>
                                </Col>
                                {/* second column */}
                                <Col style={{ marginTop: 185 }}>
                                    <hr></hr>
                                </Col>
                                {/* third container */}
                                <Col style={{ marginTop: 120 }}>
                                    <Row className="mt-3"><Button>Continue with Facebook</Button></Row>
                                    <Row className="mt-3"><Button>Continue With Google</Button></Row>
                                    <Row className="mt-3"><Button>Continue With Github</Button></Row>
                                </Col>
                            </Row>
                            <Row style={{ marginTop:25 }}>
                                <Card.Footer>
                                    <Col className="md-6 offset-4">
                                    Don't have an account <NavLink to={'/register'}>Sign Up</NavLink>
                                    </Col>
                                </Card.Footer>
                            </Row>
                        </Card.Body>
                    </Card>
                </Container>
            </div>
        </>
    );
}

export default Login;