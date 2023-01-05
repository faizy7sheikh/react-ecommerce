import React from "react";
import { Button, Card, Carousel, Container, Fade, Row ,Col} from "react-bootstrap";
import Footer from "../footer/Footer";
import MyCard from "./product/MyCard";

function Home() {
    return (
        <>
            <div>
                <Container>
                    <Carousel style={{ marginBottom: 12, marginTop: 8 }} slide={Fade}>
                        <Carousel.Item>
                            <img height={350} width={1296} src={process.env.PUBLIC_URL + 'img1.jpg'}></img>
                            <Carousel.Caption>
                                <Button width={250} variant="primary">Buy</Button>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img height={350} width={1296} src={process.env.PUBLIC_URL + 'img2.jpg'}></img>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img height={350} width={1296} src={process.env.PUBLIC_URL + 'img3.jpg'}></img>
                        </Carousel.Item>

                    </Carousel>
                    <Row>
                        <h1 variant={"dark"}>Featured</h1>
                    </Row>
                    <Row>
                        {/* show list of image and price as card */}
                        <Carousel>
                            <Carousel.Item>
                                <Card>
                                    <Card.Body>
                                        <Card.Img src=""></Card.Img>
                                        <Card.Title>T-shirt</Card.Title>
                                        <Card.Subtitle>Price $200</Card.Subtitle>
                                    </Card.Body>
                                </Card>
                            </Carousel.Item>
                            <Carousel.Item>
                                <Card>
                                    <Card.Body>
                                        <Card.Img src=""></Card.Img>
                                        <Card.Title>T-shirt</Card.Title>
                                        <Card.Subtitle>Price $200</Card.Subtitle>
                                    </Card.Body>
                                </Card>
                            </Carousel.Item>
                            <Carousel.Item>
                                <Card>
                                    <Card.Body>
                                        <Card.Img src=""></Card.Img>
                                        <Card.Title>T-shirt</Card.Title>
                                        <Card.Subtitle>Price $200</Card.Subtitle>
                                    </Card.Body>
                                </Card>
                            </Carousel.Item>
                        </Carousel>
                    </Row>
                    <Row>
                        <h4>Products</h4>
                    </Row>
                    <Row style={{ margin:15 }}>
                        <Col>
                            <MyCard starval={4} imgName="hd1.jpg" productName="Hoodie" brand="Levi's" price="300" />
                        </Col>
                        <Col>
                            <MyCard starval={4} imgName="hd2.jpg" productName="Female Hoodie" brand="Levi's" price="300" />
                        </Col>
                        <Col>
                            <MyCard starval={0} imgName="hd3.jpg" productName="Hoodie" brand="Levi's" price="300" />
                        </Col>
                        <Col>
                            <MyCard starval={4} imgName="j1.jpg" productName="Jeans" brand="Indian" price="3000" />
                        </Col>
                    </Row>
                    <Row style={{ margin:15 }}>
                        <Col>
                            <MyCard starval={4} imgName="sk1.jpg" productName="Skirt" brand="Levi's" price="5000" />
                        </Col>
                        <Col>
                            <MyCard starval={5} imgName="sk2.jpg" productName="Skirty" brand="Levi's" price="300" />
                        </Col>
                        <Col>
                            <MyCard starval={2} imgName="Sk3.jpg" productName="Blue shorts" brand="Levi's" price="300" />
                        </Col>
                        <Col>
                            <MyCard starval={3} imgName="hd1.jpg" productName="Hoodie" brand="Levi's" price="300" />
                        </Col>
                    </Row>
                    <Row style={{ margin:15 }}>
                        <Col>
                            <MyCard starval={5} imgName="sho1.jpg" productName="Shoes" brand="Levi's" price="300" />
                        </Col>
                        <Col>
                            <MyCard starval={2} imgName="sho2.jpg" productName="converse" brand="Levi's" price="300" />
                        </Col>
                        <Col>
                            <MyCard starval={1} imgName="sho3.jpg" productName="Formal Shoes" brand="Levi's" price="300" />
                        </Col>
                        <Col>
                            <MyCard starval={4} imgName="sho4.jpg" productName="Hoodie" brand="Levi's" price="300" />
                        </Col>
                    </Row>
                </Container>
            </div>
            <Footer/>
        </>
    );
}

export default Home;