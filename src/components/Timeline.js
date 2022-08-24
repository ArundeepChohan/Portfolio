import React from "react";
import { Col, Row } from "react-bootstrap";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
function Timeline() {
    return (
        <Row>
            <h1 className="project-heading">
                My Humble <strong className="purple"> Beginning </strong>
            </h1>
            <Col md={12}>
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
    );
  }
  
  export default Timeline;
