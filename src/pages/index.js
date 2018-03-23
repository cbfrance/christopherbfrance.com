import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import { transparentize } from 'polished'

const borderSize = "14px";

const Title = styled.h1`
  font-size: 30px;
  padding-top: 16px;
`;


const Container = styled.div`
  width: 800px;
  height: 1246px;
`;

const Reference = styled.div`
  background-image: url("./static/reference/mondrian.jpg");
  height: 100%;
  width: 100%;
  position: absolute;
  width: 800px;
  height: 1246px;
  opacity: 0.2;
`;

const ParentGrid = styled.div`
  display: grid;
  grid-template-columns: 72px 140px 410px 118px 22px 36px;
  grid-template-rows: 96px 394px 218px 60px 202px 232px 44px;
  grid-template-areas: "A1 A1 A2 A2 A2 A3"
                       "A1 A1 A2 A2 A2 A3"
                       "A1 A1 A2 A2 A2 A3"
                       "A1 A1 A2 A2 A2 A3"
                       "A1 A1 A2 A2 A2 A3"
                       "A1 A1 A2 A2 A2 A3"
                       "A1 A1 A2 A2 A2 A3";

  width: 100%;
  height: 100%;
  border: 1px solid pink;
`;

const A1 = styled.div`
  grid-area: A1;
  background-color: black;
  border-right: solid black ${borderSize};
`;

const A2 = styled.div`
  grid-area: A2;
`;

const A3 = styled.div`
  grid-area: A3;
`;

const P = styled.p`
  font-family: system-ui, -apple-system, BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  padding-top: ${props => props.padTop ? "80px" : null};
`;

const IndexPage = () => (
  <div>
    <Title>Mondrian</Title>
    <Container>
      <Reference/>
      <ParentGrid>
        <A1/>
        <A2/>
        <A3/>
      </ParentGrid>
    </Container>

    <P padTop>Pieter Cornelis "Piet" Mondriaan, after 1906 Mondrian (/ˈmɔːndriˌɑːn, ˈmɒn-/; Dutch: [ˈpit ˈmɔndrijaːn], later [ˈmɔndrijɑn]; 7 March 1872 – 1 February 1944), was a Dutch painter.Mondrian was a contributor to the De Stijl art movement and group, which was founded by Theo van Doesburg. He evolved a non-representational form which he termed neoplasticism. This consisted of white ground, upon which he painted a grid of vertical and horizontal black lines and the three primary colors.Mondrian's arrival in Paris from the Netherlands in 1911 marked the beginning of a period of profound change. He encountered experiments in Cubism and with the intent of integrating himself within the Parisian avant-garde removed an 'a' from the Dutch spelling of his name (Mondriaan).</P>

    <Link to="/page-2/">Go to page 2</Link>
  </div>
)

export default IndexPage
