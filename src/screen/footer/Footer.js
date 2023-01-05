
import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'

const Footer = () => {
  return (
    <div>
        <Container>
            <Row>
                <Col>
                    {/* address and all */}
                    <address>
                        Sapthagir-90
                        Benguluru
                    </address>
                </Col> 
                <Col>
                    <h4>Developed By <span><i>Bumblebees</i></span></h4>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Footer
