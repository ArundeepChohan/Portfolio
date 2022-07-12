import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import StarParticle from "../components/StarParticle";
import TechStack from "../components/TechStack";
function About() {
    return (
        <Container fluid className="about-section">
            <StarParticle />
            <TechStack />
        </Container>
    );
}

export default About;