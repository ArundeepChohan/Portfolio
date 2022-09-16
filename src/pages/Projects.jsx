import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from '../components/ProjectCard';
import medImg from "../images/MedicalSite.png";
import patientImg from "../images/PatientApp.png";
import instaworkImg from "../images/Instawork.png";
import parkingLotImg from "../images/ParkingLot.png"
import StarParticle from "../components/StarParticle";
function Projects() {
    return (
        <Container fluid className="project-section">
            <StarParticle />
            <Container>
                <h1 className="project-heading">
                    My Recent <strong className="purple">Works </strong>
                </h1>
                <p>
                    Here are a few projects I've worked on recently.
                </p>
                <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
                    <Col md={4} className="project-card">
                        <ProjectCard
                            isBlog={false}
                            imgPath={medImg}
                            title="Medical Website"
                            description="Medical website that allows users to get quality healthcare services from reliable professionals at the comfort of their own home."
                            stack="AWS (SES, S3), Google (Calendar API), OAuth2, Django, Heroku, Python, SQLite, PostgreSQL, Celery, Redis."
                            ghLink="https://github.com/ArundeepChohan/HerokuApp"
                            demoLink="https://www.youtube.com/watch?v=ZZBRlaxbcLM"
                        />
                    </Col>
                    <Col md={4} className="project-card">
                        <ProjectCard
                            isBlog={false}
                            imgPath={patientImg}
                            title="Porton Health's Patient App"
                            description="This is a dashboard for their users which is HIPAA compliant that allows users to book appointments while using the Oscar EMR app."
                            stack="Mern Stack, Material UI and Axios."
                            ghLink=""
                            demoLink="https://patient-dev.portonhealth.com/dashboard"
                        />
                    </Col>
                    <Col md={4} className="project-card">
                        <ProjectCard
                            isBlog={false}
                            imgPath={instaworkImg}
                            title="Instawork"
                            description="A team member application to list, add and edit users."
                            stack="Mern Stack with UnitTest."
                            ghLink="https://github.com/ArundeepChohan/Instaworks-Fall-Internship-2022"
                            demoLink=""
                        />
                    </Col>
                    <Col md={4} className="project-card">
                        <ProjectCard
                            isBlog={false}
                            imgPath={parkingLotImg}
                            title="Parking Lot Booker"
                            description="Uses Python and Opencv to read a video and determine if parking spots are booked from a database."
                            stack="Opencv, Python and PyQT6"
                            ghLink="https://github.com/ArundeepChohan/Parking-Lot-Booker"
                            demoLink=""
                        />
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}

export default Projects;