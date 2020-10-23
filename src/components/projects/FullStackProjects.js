import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

function FullStackProjects() {
  return (
    <Card>
      <Card.Body>
        <Card.Title>Full Stack</Card.Title>
        <Card.Text>
          Full Stack development projects. <br />
        </Card.Text>
      </Card.Body>
      <ListGroup>
        <ListGroup.Item>
          <Card.Link href="/fullstack">
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

export default FullStackProjects;
