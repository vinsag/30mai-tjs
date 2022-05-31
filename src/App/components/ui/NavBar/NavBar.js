import React from 'react'

import style from './NavBar.module.css'
import {Navbar, Container, Nav} from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.css'


const NavBar=()=>{
    return (
        <div className={style.NavBar} data-testid="NavBar">
            <Navbar bg="primary" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
};
export default NavBar;