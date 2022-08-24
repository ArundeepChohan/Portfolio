import React from "react";
import { Col, Row } from "react-bootstrap";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

function Events() {
    return (
        <Row>
             <h1 className="project-heading">
                My Extra<strong className="purple"> Events </strong>
            </h1>
            <Col md={12} >
                <VerticalTimeline>
                     
                    <VerticalTimelineElement
                        className="vertical-timeline-element--education"
                        date="April, 6, 2019"
                        iconStyle={{ background: '#c770f0', color: '#fff' }}      
                        >
                        <h3 className="vertical-timeline-element-title">Easy Markit Hackathon(2nd)</h3>
                        <p>Machine learning to determine patient visitation percentage.</p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--education"
                        date="November, 21, 2019"
                        iconStyle={{ background: '#c770f0', color: '#fff' }}      
                        >
                        <h3 className="vertical-timeline-element-title">Lighthouse Lab 21 Day Challenge(10th)</h3>
                        <p>Map, Reduce, Filter functions using ES6.</p>
                    </VerticalTimelineElement>     
                    <VerticalTimelineElement
                        className="vertical-timeline-element--education"
                        date="May 2022"
                        iconStyle={{ background: '#c770f0', color: '#fff' }}      
                        >
                        <h3 className="vertical-timeline-element-title">Kick Starter & Code Jam (Qualified) </h3>
                        <p>Google's premier coding challenge to test your problem solving and data algorithm skills.</p>
                    </VerticalTimelineElement>     
                                     
                </VerticalTimeline>
            </Col>
        </ Row>
    )}
export default Events;