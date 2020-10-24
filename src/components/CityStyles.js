import React from "react";
import styled from "styled-components";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";

function CityStyles({ CityName, CityImage }) {
  console.log("CityName", CityName);
  console.log("CityImage", CityImage);
  const CityView = require(`../assets/${CityImage}`);

  const HeadingStyles = styled.div`
    .jumbotron {
      background: url(${CityView}) fixed center no-repeat;
      background-size: cover;
      vertical-align: middle;
      color: #eceff4;
      position: relative;
      text-align: right;
      opacity: 1;
      transition: opacity 1s ease-in-out;
    }
  `;

  return (
    <HeadingStyles>
      <Jumbotron fluid>
        <Container fluid>
          <h1>Albac.Dev</h1>
          <p>
            <b>Portafolio</b>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
          </p>
        </Container>
        <br />
        <br />
        <br />
        <br />
        <p>{CityName}&emsp;&emsp;&emsp;</p>
      </Jumbotron>
    </HeadingStyles>
  );
}

export default CityStyles;
