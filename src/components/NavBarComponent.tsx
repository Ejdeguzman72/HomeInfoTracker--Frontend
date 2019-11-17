import React from 'react';
import { Link } from 'react-router-dom';
// import classNamees from '*.module.css';
import { Navbar, Nav, Form, Button, NavDropdown } from 'react-bootstrap';

export class NavBarComponent extends React.Component<any, any> {
    
    constructor(props: any) {
        super(props);

    }
    render() {
        return (
            <div>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand><Link to="/home" id="link">
                   Home </Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                    <Nav.Link>
                        <Link to="/contact-information" id="link">
                        Contact Information
                        </Link>
                        </Nav.Link>
                    <Nav.Link>
                        <Link to="/car-information" id="link">
                        Car Information
                        </Link>
                    </Nav.Link>
                    <Nav.Link>
                        <Link to="/car-record-information" id="link">
                        Car Record Information
                        </Link>
                    </Nav.Link>
                    <Nav.Link>
                        <Link to="/transaction-information" id="link">
                        Transaction Information
                        </Link>
                    </Nav.Link>
                    <Nav.Link>
                        <Link to="/fun-applications" id="link">
                       Fun Applications
                        </Link>
                    </Nav.Link>
                    </Nav>
                    <Form inline>
                        <Button variant="outline-success" id="link">Log In</Button>
                    </Form>
                </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}