import React from 'react';
import { Nav, Navbar } from 'rsuite';
import { Link } from 'react-router-dom';
import 'rsuite/dist/rsuite.min.css';
import logo from '/weblogos.png'
const AwesomeNav = () => {
    return (
        <>
            <Navbar appearance='' className={`prata-regular`}>
                <Navbar.Brand as={Link} to="/">
                    <div className='flex justify-center items-center gap-5 h-10'>
                        <img src={logo} alt="logo" className='w-50 h-16' />
                    </div>
                </Navbar.Brand>
                <Navbar.Brand >
                </Navbar.Brand>
                <div className='flex justify-center items-center h-20 text-lg'>
                    <Nav >
                        <Nav.Item eventKey="home" as={Link} to="/">
                            Home
                        </Nav.Item>
                        <Nav.Item eventKey="markets" as={Link} to="/markets">
                        Markets & solutions
                        </Nav.Item>
                        <Nav.Item eventKey="innovation" as={Link} to="/innovation">
                        Innovation
                        </Nav.Item>
                        <Nav.Item eventKey="/product" as={Link} to="/product">
                        Product Portfolio
                        </Nav.Item>
                        <Nav.Item eventKey="sustainability" as={Link} to="/sustainability">
                        Sustainability
                        </Nav.Item>
                        <Nav.Item eventKey="classes" as={Link} to="/contact">
                          Contact Us
                        </Nav.Item>
                        <Nav.Item eventKey="learnstream" as={Link} to="/news">
                           News
                        </Nav.Item>
                    </Nav>
                </div>
            </Navbar>
        </>
    );
};

export default AwesomeNav;