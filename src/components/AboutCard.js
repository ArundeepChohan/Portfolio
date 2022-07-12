import Card from "react-bootstrap/Card";
import React from "react";
import { ImPointRight } from "react-icons/im";
function AboutCard() {
    return (
        <Card className="about-card-view">
            <Card.Body>
                <blockquote className="blockquote mb-0">
                    <p>
                        Hi Everyone, I am <span className="purple">Arundeep Chohan </span>
                        from <span className="purple"> Vancouver, BC, Canada.</span>
                        <br />I hail from <span className="purple">Langara</span> with a Computer Science Degree.
                        <br />
                        <br />
                        Apart from coding, some other activities that I love to do!
                    </p>
                    <ul>
                        <li className="about-activity">
                            <ImPointRight /> Playing Games and Soccer
                        </li>
                        <li className="about-activity">
                            <ImPointRight /> Helping out on Stack Overflow
                        </li>
                        <li className="about-activity">
                            <ImPointRight /> Animal owner
                        </li>
                    </ul>

                    <p style={{ color: "rgb(155 126 172)" }}>
                        "Strive to build things that make a difference!"{" "}
                    </p>
                    <footer className="blockquote-footer">Arundeep</footer>
                </blockquote>
            </Card.Body>
        </Card>
    )}
export default AboutCard;