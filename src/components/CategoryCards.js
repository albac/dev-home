import React from "react";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import styled from "styled-components";
import AWSProjects from "./projects/AWSProjects";
import DevOpsProjects from "./projects/DevOpsProjects";
import FullStackProjects from "./projects/FullStackProjects";

function CategoryCards() {
  const CardStyles = styled.div`
    .card {
      width: 22rem;
      background-color: #2e3440;
    }
    .card-text {
      font-size: 0.95rem;
    }
    .list-group-item {
      background-color: #2e3440;
      font-size: 0.87rem;
      text-align: left;
    }
    .card-title {
      color: #81a1c1;
    }
    .card-link {
      color: #8fbcbb;
    }
  `;
  return (
    <CardStyles>
      <CardDeck fluid>
        <Card fluid>
          <Card.Body>
            <Card.Title>News / Stats</Card.Title>
            <Card.Text>Statistics</Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <DevOpsProjects />
        <AWSProjects />
        <FullStackProjects />
      </CardDeck>
    </CardStyles>
  );
}

export default CategoryCards;
