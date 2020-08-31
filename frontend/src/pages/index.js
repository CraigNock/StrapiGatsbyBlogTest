import React from "react"
import { StaticQuery, graphql } from "gatsby"
import styled from '@emotion/styled';

import Layout from "../components/layout"
import ArticlesComponent from "../components/articles"

import "../assets/css/main.css"

const IndexPage = () => (
  <Layout>
    <StaticQuery
      query={graphql`
        query {
          allStrapiArticle {
            edges {
              node {
                strapiId
                title
                category {
                  name
                }
                image {
                  publicURL
                }
              }
            }
          }
        }
      `}
      render={data => (
        <div className="uk-section">
          <div className="uk-container uk-container-large">
            <Title>A leading title</Title>
            <Preamble>
              <p>Short description of this area/intent.</p>
            </Preamble>
            <ArticlesComponent articles={data.allStrapiArticle.edges} />
          </div>
        </div>
      )}
    />
  </Layout>
)

const Preamble = styled.div`
  border-bottom: 1px solid lightgray;
  margin-bottom: 2rem;
  p {
    font-family: 'Istok Web', Courier, monospace;
    font-size: 1.5rem;
  }
`;
const Title = styled.h1`
  font-family: 'Istok Web', Courier, monospace;

`;

export default IndexPage