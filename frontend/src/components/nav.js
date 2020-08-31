import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"
import styled from '@emotion/styled';
// import '../assets/css/main.css'

const Nav = () => (
    <StyledDiv>
      <Sides>
        <LinkList >
          <li>
            <StyledLink to="/">Website Title</StyledLink>
          </li>
        </LinkList>
      </Sides>

      <Sides>
        <LinkList >
          <StaticQuery
            query={graphql`
              query {
                allStrapiCategory {
                  edges {
                    node {
                      strapiId
                      name
                    }
                  }
                }
              }
            `}
            render={data =>{
              console.log('data',data)
              return data.allStrapiCategory.edges.map((category, i) => {
                console.log('categpry',category.node.name)
                return (
                  <li key={category.node.strapiId}>
                    <StyledLink to={`/category/${category.node.strapiId}`}>
                      {category.node.name}
                    </StyledLink>
                  </li>
                )
              })
            }
            }
          />
        </LinkList>
      </Sides>
    </StyledDiv>
)

const StyledDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 5rem;
  background: #3a3633;
`;
const Sides = styled.div`
  display: flex;
  align-items: center;
  padding: 0 2rem;
  height: 100%;
`;
const LinkList = styled.ul`
  list-style-type: none;
  height: 100%;
  padding: 0;
  margin: 0;
  li {
    display: inline-block;
    height: 100%;
  }
`;
const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  height: 100%;
  padding: 0 .5rem;
  color: whitesmoke;
  text-transform: uppercase;
  font-family: 'Istok Web', Courier, monospace;
  font-size: 1.25rem;
  &:hover{
      color: silver;
      cursor: pointer;
    }
`;


export default Nav