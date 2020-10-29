import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import styled from "styled-components";

import { withAuthenticator } from "@aws-amplify/ui-react";

// import query definition
import { listBlogs as ListBlogs } from "./graphql/queries";

// imports from Amplify library
import { API, graphqlOperation } from "aws-amplify";

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

function BlogManager() {
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
            <Card>
              <Card.Body>
                <Card.Title>Blog List</Card.Title>
                <Card.Text>Current Blogs:</Card.Text>
              </Card.Body>
              <ListGroup>
                {blogs.map((blog, index) => (
                  <ListGroup.Item key={index}>
                    <Card.Link href="/awsdevsecure">{blog.title}</Card.Link>
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </Card>
          </Row>
        </Container>
      </div>
    </CardStyles>
  );
}

export default withAuthenticator(BlogManager, {
  includeGreetings: true,
});
