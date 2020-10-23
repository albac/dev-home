import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Heading from "./components/Heading";
import ProfileCard from "./components/ProfileCard";
import CategoryCards from "./components/CategoryCards";

function Home() {
  return (
    <div className="App">
      <Heading />
      <Container fluid>
        <Row>
          <Col md={9} lg={10}>
            <CategoryCards />
          </Col>
          <Col md={1} lg={2}>
            <ProfileCard />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
