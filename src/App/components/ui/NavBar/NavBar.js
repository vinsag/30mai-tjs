import React from 'react'

import style from './NavBar.module.css'
import {Navbar, Container, Nav} from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.css'
import { LinkContainer } from "react-router-bootstrap"


const NavBar=()=>{
    return (
        <div className={style.NavBar} data-testid="NavBar">
            <Navbar bg="primary" variant="dark">
                <Container>
                <LinkContainer to="/">
                    <Navbar.Brand >Navbar</Navbar.Brand>
                </LinkContainer>
                <Nav className="me-auto">
                <LinkContainer to="/">
                        <Nav.Link >Home</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/editor">
                    <Nav.Link >new Meme</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/thumbnail">
                    <Nav.Link >Thumbnail</Nav.Link>
                </LinkContainer>
                        
                <LinkContainer to="/editor/0">
                    <Nav.Link >edit id</Nav.Link>
                    </LinkContainer>
            </Nav>
            </Container>
            </Navbar>
        </div>
    );
};
export default NavBar;