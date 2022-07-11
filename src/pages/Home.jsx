import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import StarParticle from "../components/StarParticle";
import {
  AiFillGithub,
  AiOutlineMail,
} from "react-icons/ai";

import { FaLinkedinIn,FaStackOverflow } from "react-icons/fa";
import {ImBlog} from 'react-icons/im';
import Avatar from "../images/Avatar.png";

function Home() {
    return (
            <Container fluid className="home-section">
                <StarParticle />
                
                <Row>
                    <Col md={12} className="home-about-description">
                        <h1 >
                            LET ME <span className="purple"> INTRODUCE </span> MYSELF
                        </h1>
                        <div className="home-about-body">
                            <h1 className="heading-name">
                                I'm
                                <strong className="purple"> Arundeep Chohan</strong>
                            </h1>
                            <Col md={12} >
                                <img src={Avatar}  alt="Avatar" className="Avatar"></img>
                            </Col>
                                🧗🏽  
                                <i><b className="purple"> “Sic Parvis Magna”</b></i>
                                    , meaning 
                                <i><b className="purple"> “Greatness from Small Beginnings”</b></i>
                                    - 
                                <i><b className="purple"> Nathan Drake</b></i>
                                🧗🏽 
                            <br />
                            <br />
                                My field of interests are building 
                                <i><b className="purple"> Full Stack Applications </b> and also in areas related to
                                    <b className="purple"> QA. </b></i>
                                <br />
                                <br />
                                Whenever possible, I apply my passion for developing products
                                with the <b className="purple"> Mern Stack </b> 
                                as well as  
                                <i>
                                    <b className="purple">
                                        &nbsp; Automation Testing
                                    </b>
                                </i>
                                &nbsp; like 
                                <i>
                                    <b className="purple"> Selenium.</b>
                                </i>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col md={12} className="home-about-social">
                    <h1>FIND ME ON</h1>
                    <p>
                        Feel free to <span className="purple">connect </span>with me
                    </p>
                    <ul className="home-about-social-links">
                        
                        <li className="social-icons">
                            <a
                                href="https://github.com/arundeepchohan"
                                target="_blank"
                                rel="noreferrer"
                                className="icon-colour  home-social-icons"
                            >
                            <AiFillGithub />
                            </a>
                        </li>
                        <li className="social-icons">
                            <a
                                href="mailto:arundeepchohan2009@hotmail.com"
    
                                className="icon-colour  home-social-icons"
                            >
                            <AiOutlineMail/>
                            </a>
                        </li>
                        <li className="social-icons">
                            <a
                                href="https://www.linkedin.com/in/arundeepchohan"
                                target="_blank"
                                rel="noreferrer"
                                className="icon-colour  home-social-icons"
                            >
                            <FaLinkedinIn />
                            </a>
                        </li>
                        <li className="social-icons">
                            <a
                                href="https://stackoverflow.com/users/9901261/arundeep-chohan"
                                target="_blank"
                                rel="noreferrer"
                                className="icon-colour  home-social-icons"
                            >
                            <FaStackOverflow />
                            </a>
                        </li>
                        <li className="social-icons">
                            <a
                                href="https://arundeepchohan.wordpress.com/"
                                target="_blank"
                                rel="noreferrer"
                                className="icon-colour  home-social-icons"
                            >
                            <ImBlog />
                            </a>
                        </li>
                        
                    </ul>
                    </Col>
                </ Row>
            </Container>
    );
}

export default Home;