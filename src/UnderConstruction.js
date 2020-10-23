import React from "react";
import styled from "styled-components";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Nav from "react-bootstrap/Nav";
import background from "./assets/background.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function UnderConstruction() {
  const ContainerStyles = styled.div`
    .nomatch {
      background-image: url(${background});
      height: 100vh;
      background-color: #2e3440;
      background-position: center;
      background-size: cover;
      background-repeat: no-repeat;
    }
    .nav-link {
      color: #222222;
    }
  `;
  return (
    <ContainerStyles>
      <div className="nomatch">
        <div
          style={{
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <Nav.Link href="/">
            <Container>
              <Row className="justify-content-md-center">
                <h2>
                  <FontAwesomeIcon icon={["fas", "laptop-code"]} size="lg" />
                  {"  "}Under construction ..
                </h2>
              </Row>
              <Row className="justify-content-md-center">
                {"  "}.. Coming Soon .. {"  "}
                <FontAwesomeIcon icon={["fas", "running"]} size="lg" />
              </Row>
            </Container>
          </Nav.Link>
        </div>
        ,
      </div>
    </ContainerStyles>
  );
}

export default UnderConstruction;
