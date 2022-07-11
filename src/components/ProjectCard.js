import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCard(props) {
  return (
    <Card className="project-card-view">
        <Card.Body >
            <Card.Title style={{ marginLeft: "10px" }} >{props.title}</Card.Title>
            <Card.Img variant="top" src={props.imgPath} alt="card-img" style={{width: "100%"}}/>
            <Card.Text style={{ textAlign: "justify",marginLeft: "10px" }}>
                {props.description}
            </Card.Text>
            <Card.Text style={{ textAlign: "justify",marginLeft: "10px" }}>
                {props.stack}
            </Card.Text>
            {props.ghLink && (
            <Button style={{ marginLeft: "10px" }}variant="primary" href={props.ghLink} target="_blank">
                <BsGithub /> &nbsp;
                {props.isBlog ? "Blog" : "GitHub"}
            </Button>    
            )}
            {!props.isBlog && props.demoLink && (
                <Button
                        variant="primary"
                        href={props.demoLink}
                        target="_blank"
                        style={{ marginLeft: "10px" }}
                >
                <CgWebsite /> &nbsp;
                {"Demo"}
            </Button>
            )}
        </Card.Body>
    </Card>
  );
}
export default ProjectCard;