import React from 'react';
import { Nav, Navbar } from 'rsuite';
import { Link } from 'react-router-dom';
import 'rsuite/dist/rsuite.min.css';
const AwesomeNav = () => {
    return (
        <>
            <Navbar appearance='inverse' className={`prata-regular`}>
                <Navbar.Brand as={Link} to="/">
                    <div className='flex justify-center items-center gap-5 h-10'>
                        {/* <img src={logo1} alt="logo" className='w-40 h-16' /> */}
                        <h1 className='text-xl'>CUECHEM</h1>
                    </div>
                </Navbar.Brand>
                <Navbar.Brand >
                </Navbar.Brand>
                <div className='flex justify-center items-center h-20 text-lg'>
                    <Nav >
                        <Nav.Item eventKey="home" as={Link} to="/">
                            Home
                        </Nav.Item>
                        <Nav.Item eventKey="classes" as={Link} to="/all-classes">
                        Markets & solutions
                        </Nav.Item>
                        <Nav.Item eventKey="learnstream" as={Link} to="/learnstream">
                        Innovation
                        </Nav.Item>
                        <Nav.Item eventKey="home" as={Link} to="/">
                        Product Portfolio
                        </Nav.Item>
                        <Nav.Item eventKey="home" as={Link} to="/">
                        Sustainability
                        </Nav.Item>
                        <Nav.Item eventKey="classes" as={Link} to="/all-classes">
                          Contact Us
                        </Nav.Item>
                        <Nav.Item eventKey="learnstream" as={Link} to="/learnstream">
                           News
                        </Nav.Item>
                    </Nav>
                </div>
            </Navbar>
        </>
    );
};

export default AwesomeNav;