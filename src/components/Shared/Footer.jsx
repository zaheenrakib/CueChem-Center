import React from 'react';
import { Container, Row, Col, InputGroup, Input, Button } from 'rsuite';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className='mt-5 '>
            <Container>
                <Row className="show-grid prata-regular text-lg bg-[#37f5cf] rounded-t-xl">
                    <Col xs={24} sm={8} md={6}>
                        <h2>Services</h2>
                        <ul style={{ listStyleType: 'none', padding: 0 }}>
                            <li><a href="#">Branding</a></li>
                            <li><a href="#">Design</a></li>
                            <li><a href="#">Marketing</a></li>
                            <li><a href="#">Advertisement</a></li>
                        </ul>
                    </Col>
                    <Col xs={24} sm={8} md={6}>
                        <h2>CueChem</h2>
                        <ul style={{ listStyleType: 'none', padding: 0 }}>
                            <li><a href="#">About us</a></li>
                            <li><a href="#">Contact</a></li>
                            <li><a href="#">Jobs</a></li>
                            <li><a href="#">Press kit</a></li>
                        </ul>
                    </Col>
                    <Col xs={24} sm={8} md={6}>
                        <h2>Legal</h2>
                        <ul style={{ listStyleType: 'none', padding: 0 }}>
                            <li><a href="#">Terms of use</a></li>
                            <li><a href="#">Privacy policy</a></li>
                            <li><a href="#">Cookie policy</a></li>
                        </ul>
                    </Col>
                    <Col xs={24} sm={24} md={6}>
                        <h2 className='mb-2'>Newsletter</h2>
                        <InputGroup style={{ marginBottom: 20 }}>
                            <Input placeholder="Enter your email address" />
                            <Button appearance="primary" style={{ marginLeft: '5px' }}>
                                Subscribe
                            </Button>
                        </InputGroup>
                        <div className='flex justify-evenly'>
                            <a href="#" className="icon-button">
                                <FaFacebookF className='text-4xl' />
                            </a>
                            <a href="#" className="icon-button">
                                <FaTwitter className='text-4xl' />
                            </a>
                            <a href="#" className="icon-button">
                                <FaInstagram className='text-4xl' />
                            </a>
                            <a href="#" className="icon-button">
                                <FaYoutube className='text-4xl' />
                            </a>
                        </div>
                    </Col>
                </Row>
                <Row className='prata-regular bg-[#2d3436] text-white text-lg'>
                    <Col xs={24} style={{ textAlign: 'center', padding: '20px 0' }}>
                        <p>&copy; 2024 CueChem. All rights reserved.</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
