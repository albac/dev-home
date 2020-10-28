import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import styled from "styled-components";
// import query definition
import { listBlogs as ListBlogs } from "./graphql/queries";

// imports from Amplify library
import { API, graphqlOperation } from "aws-amplify";

function BlogManager() {
  const CardStyles = styled.div`
    .Blogs {
      background-color: #2e3440;
      min-height: 100vh;
      color: #e5e9f0;
    }
    .card {
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

  const [blogs, updateBlogs] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    try {
      const blogData = await API.graphql(graphqlOperation(ListBlogs));
      console.log("blogData:", blogData);
      updateBlogs(blogData.data.listBlogs.items);
    } catch (err) {
      /* handle error */
      console.log("error fetching blogs...", err);
    }
  }

  return (
    <CardStyles>
      <div className="Blogs">
        <Container fluid>
          <Row className="justify-content-md-center">
            <Card fluid>
              <Card.Body>
                <Card.Title>Blog List</Card.Title>
                <Card.Text>Current Blogs:</Card.Text>
              </Card.Body>
            </Card>
          </Row>
        </Container>
      </div>
    </CardStyles>
  );
}

export default BlogManager;
