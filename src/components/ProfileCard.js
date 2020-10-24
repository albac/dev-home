import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import ProfilePic from "../assets/albac_summer.jpg";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ProfileCard() {
  const CardStyles = styled.div`
    .list-group-item {
      background-color: #2e3440;
      font-size: 0.95rem;
      color: #ffffff;
    }
    .card-text {
      font-size: 0.95rem;
    }
    .card {
      background-color: #2e3440;
    }
    .card-title {
      color: #81a1c1;
    }
  `;
  return (
    <React.Fragment>
      <CardStyles>
        <Card border="dark" style={{ width: "16rem" }} className="text-left">
          <Card.Img variant="top" src={ProfilePic} fluid />
          <Card.Body>
            <Card.Title>Alfredo Baldoceda</Card.Title>
            <Card.Text>
              Lead DevOps | AWS Cloud Engineer | Full Stack Developer
            </Card.Text>
            <ListGroup horizontal>
              <ListGroup.Item
                action
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/abaldoceda",
                    "_blank"
                  )
                }
              >
                <FontAwesomeIcon icon={["fab", "linkedin"]} size="lg" />
                @albac
              </ListGroup.Item>
              <ListGroup.Item
                action
                onClick={() =>
                  window.open("https://github.com/albac", "_blank")
                }
              >
                <FontAwesomeIcon icon={["fab", "github"]} size="lg" />
                @albac
              </ListGroup.Item>
            </ListGroup>
            <ListGroup horizontal>
              <ListGroup.Item
                action
                onClick={() =>
                  window.open("https://twitter.com/albac", "_blank")
                }
              >
                <FontAwesomeIcon icon={["fab", "twitter"]} size="lg" />
                @albac
              </ListGroup.Item>
            </ListGroup>
          </Card.Body>
        </Card>
      </CardStyles>
    </React.Fragment>
  );
}

export default ProfileCard;
