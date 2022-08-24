import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import StarParticle from "../components/StarParticle";
import TechStack from "../components/TechStack";
import ToolStack from "../components/ToolStack";
import AboutCard from "../components/AboutCard";
import Timeline from "../components/Timeline";
import Events from "../components/Events";

function About() {
    return (
        <Container fluid className="about-section">
            <StarParticle />
            <Container>
                <AboutCard />
                <Timeline />
                <Events />
                <TechStack />              
                <ToolStack />
            </Container>
        </Container>
    );
}

export default About;