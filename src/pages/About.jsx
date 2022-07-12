import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import StarParticle from "../components/StarParticle";
import TechStack from "../components/TechStack";
import ToolStack from "../components/ToolStack"
import AboutCard from "../components/AboutCard"

function About() {
    return (
        <Container fluid className="about-section">
            <StarParticle />
            <Container>
                <Row>
                    <h1 >
                        About <span className="purple"> Me </span> 
                    </h1>
                    <AboutCard />
                </Row>
               
                <h1 className="project-heading">
                    Tech <strong className="purple">Skillset </strong>
                </h1>

                <TechStack />
                <h1 className="project-heading">
                    Tool <strong className="purple">Stack </strong>
                </h1>

                <ToolStack />
            </Container>
        </Container>
    );
}

export default About;