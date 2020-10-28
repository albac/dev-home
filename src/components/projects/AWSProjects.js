import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

function AWSProjects() {
  return (
    <Card>
      <Card.Body>
        <Card.Title>AWS</Card.Title>
        <Card.Text>Amazon Web Services related projects.</Card.Text>
      </Card.Body>
      <ListGroup>
        <ListGroup.Item>
          <Card.Link href="/awsdevsecure">
            Secure AWS services access for developers
          </Card.Link>
        </ListGroup.Item>
        <ListGroup.Item>
          <Card.Link href="/awsprojects">
            Using Taskcat to test a cloudformation template for Tableau Cluster.
          </Card.Link>
        </ListGroup.Item>
      </ListGroup>
      <Card.Footer>
        <small className="text-muted">Last updated 3 mins ago</small>
      </Card.Footer>
    </Card>
  );
}

export default AWSProjects;
