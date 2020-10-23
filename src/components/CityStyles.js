import React from "react";
import styled from "styled-components";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";

function CityStyles({ CityName, CityImage }) {
  console.log("CityName", CityName);
  console.log("CityImage", CityImage);
  const CityView = require(`../assets/${CityImage}`);

  const HeadingStyles = styled.div`
    .jumbo {
      background: url(${CityView}) no-repeat fixed bottom;
      background-size: cover;
      height: 320px;
      color: #eceff4;
      position: relative;
      margin-left: auto;
      margin-right: auto;
      text-align: right;
      opacity: 1;
      transition: opacity 1s ease-in-out;
    }
  `;

  return (
    <HeadingStyles>
      <Jumbotron fluid className="jumbo">
        <Container>
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
