import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Image from '../static/images/hero.svg';

const Home = ({ className = '' }) => {
    const navigate = useNavigate();

    const handleButtonClick = () => {
        navigate('/Diksha');
    };

    return (
        <header className={`hero ${className}`}>
            <Container>
                <Row className="hero_content justify-content-between py-5">
                    <Col md={7} lg={6} className="hero_text-wrapper">
                        <div className="hero_text">
                            <h1 className="hero_text-title mb-2">
                                Hi Meri Pyaari <font className="text-danger">Dikshaa</font> <br />
                                <h3>
                                    How Are You ?<br />
                                    Hope Everything is good there
                                </h3>
                            </h1>
                            <p className="hero_text-description">
                                I hope you know how much you mean to me.
                                <br />
                                Pls Press the below button. I hope iss bar last time jaia kuch na ho
                            </p>

                            <div className="hero_text-form mt-4 mt-md-5">
                                <Button
                                    className="form_btn"
                                    variant="danger"
                                    type="button"
                                    onClick={handleButtonClick}
                                >
                                    Let's Go
                                </Button>
                            </div>
                        </div>
                    </Col>
                    <Col md={5} className="hero_media-wrapper">
                        <div className="hero_media">
                            <img
                                src={Image}
                                alt="flower pot"
                                className="hero_media-img img-fluid"
                            />
                        </div>
                    </Col>
                </Row>
            </Container>
        </header>
    );
};

export default Home;
