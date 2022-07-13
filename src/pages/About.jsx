import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import StarParticle from "../components/StarParticle";
import TechStack from "../components/TechStack";
import ToolStack from "../components/ToolStack"
import AboutCard from "../components/AboutCard"
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

function About() {
    return (
        <Container fluid className="about-section">
            <StarParticle />
            <Container>
                
                <Row>
                    <Col md={12} >
                        <h1 className="project-heading">
                            About <span className="purple"> Me </span> 
                        </h1>
                        <AboutCard />
                    </Col>
                </ Row>
                
                <Row>
                    <Col md={12}>
                        <h1 className="project-heading">
                            My Humble <strong className="purple"> Beginning </strong>
                        </h1>
                        <VerticalTimeline>
                            
                            <VerticalTimelineElement
                                className="vertical-timeline-element--education"
                                date="September 2016 - September 2019"
                                iconStyle={{ background: '#c770f0', color: '#fff' }}      
                            >
                                <h3 className="vertical-timeline-element-title">Computer Science</h3>
                                <h4 className="vertical-timeline-element-subtitle">Associate's Degree</h4>
                                <p>Langara College</p>
                            </VerticalTimelineElement>
                            <VerticalTimelineElement
                                className="vertical-timeline-element--education"
                                date="September 2019 - April 2021"
                                iconStyle={{ background: '#c770f0', color: '#fff' }}      
                            >
                                <h3 className="vertical-timeline-element-title">Freelancing</h3>
                                <p>Freelancer.com</p>
                            </VerticalTimelineElement>
                            <VerticalTimelineElement
                                className="vertical-timeline-element--education"
                                date="April - June 2021"
                                iconStyle={{ background: '#c770f0', color: '#fff' }}      
                            >
                                <h3 className="vertical-timeline-element-title">Full Stack Developer</h3>
                                <p>Porton Health</p>
                            </VerticalTimelineElement>
                            
                        </VerticalTimeline>
                    </Col>    
                </Row>
               
                <TechStack />
               
                <ToolStack />
            </Container>
        </Container>
    );
}

export default About;