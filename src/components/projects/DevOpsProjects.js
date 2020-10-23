import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

function DevOpsProjects() {
  return (
    <Card>
      <Card.Body>
        <Card.Title>DevOps</Card.Title>
        <Card.Text>
          Automation, build release pipelines, orchestration.
        </Card.Text>
      </Card.Body>
      <ListGroup>
        <ListGroup.Item>
          <Card.Link href="/devops">
            React Hooks Bootstrap for city hero heading ramdom selection.
          </Card.Link>
        </ListGroup.Item>
      </ListGroup>
      <Card.Footer>
        <small className="text-muted">Last updated 3 mins ago</small>
      </Card.Footer>
    </Card>
  );
}

export default DevOpsProjects;
