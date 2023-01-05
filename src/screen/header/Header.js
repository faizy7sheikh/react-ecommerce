import React from "react";
import { Nav,Navbar,Container,NavDropdown,Form,Button} from "react-bootstrap";
import {NavLink} from 'react-router-dom';
import { Link } from "react-router-dom";

function Header() {
    return (
        <>
            <Navbar bg="light" expand="lg">
                <Container fluid>
                    <Navbar.Brand href="/">Ecommerce</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto ml-4 my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <NavLink to={'/'}>Home</NavLink>
                            <NavLink href="#action2">Shop</NavLink>
                            <NavLink href="#action2">Featured</NavLink>
                            <NavLink href="#action2">Recommended</NavLink>
                           
                        </Nav>
                        <Form className="d-flex">
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-success">Search</Button>
                        </Form>
                        
                        <NavLink to={'register'} >SignUp</NavLink> 
                        <NavLink to={'login'} >Sign In</NavLink> 
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default Header;